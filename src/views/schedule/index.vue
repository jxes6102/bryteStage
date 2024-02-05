<template>
    <div 
        class="w-full h-[100vh] flex flex-col justify-start items-start"
    >
        <div class="w-full my-3 px-3 text-3xl flex flex-wrap justify-start items-center">
            日程管理
        </div>
        <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
        <div class="w-auto md:w-full h-full">
            <el-calendar 
                ref="calendar" 
                class="w-[auto] md:w-[75vw] flex flex-wrap justify-center md:justify-start items-center">
                <template #header="{ date }">
                    <div class="flex flex-col justify-center items-center">
                        <span class="text-2xl">{{ date }}</span>
                        <el-button-group>
                            <!-- <el-button size="small" @click="selectDate('prev-year')">
                                上一年
                            </el-button> -->
                            <el-button style="font-size:16px;" size="small" @click="selectDate('prev-month',date)">
                                上個月
                            </el-button>
                            <el-button style="font-size:16px;" size="small" @click="selectDate('today',date)">今天</el-button>
                            <el-button style="font-size:16px;" size="small" @click="selectDate('next-month',date)">
                                下個月
                            </el-button>
                            <!-- <el-button size="small" @click="selectDate('next-year')">
                                下一年
                            </el-button> -->
                        </el-button-group>
                    </div>
                </template>
                <template #date-cell="item">
                    <div 
                        @click="test($event,item.data)" 
                        class="w-full h-full flex flex-wrap justify-center items-start">
                        <div class="w-full flex flex-wrap justify-center items-start">{{ item.data.day }}</div>
                    </div>
                </template>
            </el-calendar>
        </div>
        <Teleport to="body">
            <dialogView type="auto" @close="cancel" v-if="editStatus">
                <template v-slot:title>
                    <div class="w-full my-[1px] md:my-1 px-2 py-[1px] md:py-1 text-2xl">編輯日程({{ scheduleData.scheduleDate }})</div>
                    <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
                </template>
                <template v-slot:message>
                    <div class="w-[100%] h-auto flex flex-wrap justify-center items-center overflow-x-hidden overflow-y-auto">
                        <el-form :inline="false" label-position="top" :model="scheduleData" label-width="60px" style="width:100%;padding:10px 5px;">
                            <el-form-item label="名稱">
                                <el-col :span="1"></el-col>
                                <el-col :span="22">
                                    <el-input placeholder="" v-model="scheduleData.name" />
                                </el-col>
                                <el-col :span="1"></el-col>
                            </el-form-item>
                            <el-form-item label="日程類型">
                                <el-col :span="1"></el-col>
                                <el-col :span="22">
                                    <el-select
                                        style="width: 100%;font-size: 14px;"
                                        v-model="scheduleData.state" 
                                        placeholder="">
                                        <el-option label="男" value="男" />
                                        <el-option label="女" value="女" />
                                    </el-select>
                                </el-col>
                                <el-col :span="1"></el-col>
                            </el-form-item>
                            <!-- <el-form-item label="身分">
                                <el-col :span="1"></el-col>
                                <el-col :span="22">
                                    <el-select
                                        style="width: 100%;font-size: 14px;"
                                        v-model="userData.roleId" 
                                        placeholder="">
                                        <template v-for="(item,index) in roleData" :key="index">
                                            <el-option :label="item.label" :value="item.value" />
                                        </template>
                                    </el-select>
                                </el-col>
                                <el-col :span="1"></el-col>
                            </el-form-item> -->
                            
                        </el-form>
                    </div>
                </template>
                <template v-slot:control>
                    <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
                    <div class="w-full h-auto my-1 px-2 py-1 flex flex-wrap justify-end items-center">
                        <button
                            class="w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold mx-2 py-1 px-2 md:py-2 md:px-3 rounded">
                            修改
                        </button>
                    </div>
                </template>
            </dialogView>
        </Teleport>
    </div>
</template>

<script setup>
/*eslint-disable*/
import { ref,computed } from "vue"
import { useRouter,useRoute } from "vue-router"
import { useMobileStore } from '@/stores/index'
import { getDataListByMonth,getDetailByDate } from '@/api/schedule'
import dialogView from "@/components/dialogView.vue"

const router = useRouter()
const route = useRoute()
const mobileStore = useMobileStore()

const isMobile = computed(() => {
  return mobileStore.isMobile
})

const calendar = ref(null)
const selectDate = async(val,date) => {
    if (!calendar.value || loadStatus.value){
        return false
    }
    // prev-month
    // today
    // next-month
    let arr = date.split(' ')
    console.log('val',val)
    console.log('date',date)
    let year = parseInt(arr[0])
    let month = parseInt(arr[2])
    let dataStr = ''
    if(val=='prev-month'){
        if(month==1){
            month = 11
            year--
        }else{
            month-=2
        }
        dataStr = new Date(year, month, 2).toISOString()
    }else if(val=='next-month'){
        if(month==12){
            month = 0
            year++
        }
        dataStr = new Date(year, month, 2).toISOString()
    }else if(val=='today'){
        dataStr = new Date().toISOString()
    }
    if(!(year == 2024)){
        return false
    }
    // console.log(year, month)
    console.log('dataStr',dataStr)
    await getDateList(dataStr)
    calendar.value.selectDate(val)
}
const scheduleData = ref({
    id:'',
    name:'',
    state:'',
    stateName:'',
    scheduleDate:''
})
const editStatus = ref(false)
const test = (event,item) => {
    console.log('============')
    if(item.type != 'current-month'){
        event.stopPropagation()
        event.preventDefault()
        return false
    }
    scheduleData.value.scheduleDate = item.day
    
    editStatus.value = true
    // console.log('event',event)
    console.log('item',item)
    console.log('date',item.date.toISOString())
    // console.log('item.type',item.type)
    // console.log('calendar.value',calendar.value)
    
}


const cancel = () => {
    editStatus.value = false
}

const loadStatus = ref(false)
const dateData = ref([])
const getDateList = async(date) => {
    if(loadStatus.value){
        return false
    }
    
    loadStatus.value = true
    const formData = new FormData();
    formData.append("scheduleDate", date);

    await getDataListByMonth(formData).then((res) => {
        // console.log('res',res)

        if(res.data.status){
            let target = res.data.data
            for(let key in target){
                target[key].day = target[key].scheduleDate.substring(0,10)
            }
            dateData.value = res.data.data
            console.log('dateData.value',dateData.value)
            console.log('target',target)
        }else{
        }

        loadStatus.value = false
    })
}


const init = async() => {
    console.log('init')
    getDateList(new Date().toISOString())
}

init()

</script>

<style lang="scss" scoped>
:deep(.el-form-item__label){
    margin: 0px 0px 0px 0px !important;
    padding: 0px 10px !important;
}

@media screen and (min-width: 768px) {
    :deep(.el-form-item__label){
        margin: 0px 0px 0px 0px !important;
        padding: 0px 15px !important;
    }
}

:deep(.el-calendar-table .el-calendar-day ){
    padding: 0px !important;
}

@media screen and (min-width: 768px) {
    :deep(.el-calendar-table .el-calendar-day ){
        padding: 0px !important;
        height: 100px !important;
    }
}

@media screen and (min-width: 1500px) {
    :deep(.el-calendar-table .el-calendar-day ){
        padding: 0px !important;
        height: 150px !important;
    }
}


:deep(.el-calendar-table__row):nth-child(even){
    background-color:rgb(249 250 251);
}
</style>