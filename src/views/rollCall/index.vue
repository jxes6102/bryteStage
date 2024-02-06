<template>
    <div 
        class="w-full h-[100vh] flex flex-col justify-start items-start"
    >
        <div class="w-full my-3 px-3 text-3xl flex flex-wrap justify-start items-center">
            點名管理
        </div>
        <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
        <div class="w-full md:w-[80%] my-2 p-1 md:p-2 rounded-md ">
            <el-form :inline="!isMobile" :model="form" label-width="80px">
                <el-form-item label="日期">
                    <el-col :span="isMobile ? 22 : 24">
                        <el-date-picker
                            popper-class="custom-date-picker"
                            v-model="form.date"
                            type="date"
                            placeholder="Pick a day"
                            style="width: 100%;font-size: 14px;"
                        />
                    </el-col>
                </el-form-item>
                <el-form-item label="班級">
                    <el-col :span="isMobile ? 22 : 24">
                        <el-select
                            style="width: 100%;font-size: 14px;"
                            v-model="form.class" 
                            placeholder="">
                            <template v-for="(item,index) in classList" :key="index">
                                <el-option :label="item.label" :value="item.value" />
                            </template>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="24">
                        <el-button class="mx-1" type="primary" @click="onSubmit">查詢</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </div>
        <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
        <div class="w-full my-3 px-3 text-2xl flex flex-wrap justify-start items-center">
            班級資訊
        </div>
        <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
        <div class="w-full md:w-[75%] lg:w-[80%] h-auto my-1 px-2 py-1 flex flex-wrap justify-center items-center">
            <el-table 
                :row-class-name="tableRowClassName"
                :data="userList" 
                style="width: 100%;font-size:16px;">
                <el-table-column prop="account" >
                    <template #header="scope">
                        <div class="flex flex-wrap">
                            <div class="cursor-pointer" @click="sortCol(scope.column.property)">帳號</div>
                            <el-icon class="ml-[1px] md:ml-1 cursor-pointer" @click="sortSize(scope.column.property)" :size="20">
                                <Sort />
                            </el-icon>
                        </div>
                    </template>
                    <template #default="scope">
                        <div class="truncate">{{ scope.row.account }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="gender" >
                    <template #header="scope">
                        <div class="flex flex-wrap">
                            <div class="cursor-pointer" @click="sortCol(scope.column.property)">性別</div>
                            <el-icon class="ml-[1px] md:ml-1 cursor-pointer" @click="sortSize(scope.column.property)" :size="20">
                                <Sort />
                            </el-icon>
                        </div>
                    </template>
                    <template #default="scope">
                        <div class="truncate">{{ scope.row.gender }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" >
                    <template #header="scope">
                        <div class="flex flex-wrap">
                            <div class="cursor-pointer" @click="sortCol(scope.column.property)">姓名</div>
                            <el-icon class="ml-[1px] md:ml-1 cursor-pointer" @click="sortSize(scope.column.property)" :size="20">
                                <Sort />
                            </el-icon>
                        </div>
                    </template> 
                    <template #default="scope">
                        <div class="truncate">{{ scope.row.name }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" :width="isMobile ? 120 : ''">
                    <template #header="scope">
                        <div class="flex flex-wrap">
                            <div class="cursor-pointer" @click="sortCol(scope.column.property)">點名狀態</div>
                            <el-icon class="ml-[1px] md:ml-1 cursor-pointer" @click="sortSize(scope.column.property)" :size="20">
                                <Sort />
                            </el-icon>
                        </div>
                    </template> 
                    <template #default="scope">
                        <div class="truncate">{{ scope.row.name }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" :width="isMobile ? 120 : ''">
                    <template #header="scope">
                        <div class="flex flex-wrap">
                            <div class="cursor-pointer" @click="sortCol(scope.column.property)">到校時間</div>
                            <el-icon class="ml-[1px] md:ml-1 cursor-pointer" @click="sortSize(scope.column.property)" :size="20">
                                <Sort />
                            </el-icon>
                        </div>
                    </template> 
                    <template #default="scope">
                        <div class="truncate">{{ scope.row.name }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" :width="isMobile ? 120 : ''">
                    <template #header="scope">
                        <div class="flex flex-wrap">
                            <div class="cursor-pointer" @click="sortCol(scope.column.property)">離校時間</div>
                            <el-icon class="ml-[1px] md:ml-1 cursor-pointer" @click="sortSize(scope.column.property)" :size="20">
                                <Sort />
                            </el-icon>
                        </div>
                    </template> 
                    <template #default="scope">
                        <div class="truncate">{{ scope.row.name }}</div>
                    </template>
                </el-table-column>
                <el-table-column width="90" label="操作" > 
                    <template #default="scope">
                        <div class="truncate">
                            <el-button class="mx-1" type="primary" @click="editUser(scope)">編輯</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="w-full md:w-[80%] h-auto flex flex-wrap justify-center items-center">
            <el-pagination
                :small="isMobile"
                :background="!isMobile"
                layout="prev, pager, next"
                :current-page="page"
                :total="totalCount"
                :page-sizes="[10]"
                :disabled="loadStatus"
                @current-change="changePage"
                class="mt-4"
            />
        </div>
        <div class="w-full my-3 px-3 text-xl flex flex-wrap justify-start items-center">
            {{ '共' + totalCount + '筆資料' }}
        </div>

        <Teleport to="body">
            <dialogView type="auto" @close="cancel" v-if="editStatus">
                <template v-slot:title>
                    <div class="w-full my-[1px] md:my-1 px-2 py-[1px] md:py-1 text-2xl">編輯簽到</div>
                    <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
                </template>
                <template v-slot:message>
                    <div class="w-[100%] h-auto flex flex-wrap justify-center items-center overflow-x-hidden overflow-y-auto">
                        <el-form :inline="false" label-position="top" :model="userData" label-width="60px" style="width:100%;padding:10px 5px;">
                            <el-form-item label="姓名">
                                <el-col :span="1"></el-col>
                                <el-col :span="22">
                                    <el-input disabled placeholder="" v-model="editData.name" />
                                </el-col>
                                <el-col :span="1"></el-col>
                            </el-form-item>
                            <el-form-item label="簽到狀態">
                                <el-col :span="1"></el-col>
                                <el-col :span="22">
                                    <el-select
                                        style="width: 100%;font-size: 14px;"
                                        v-model="editData.status"
                                        placeholder="">
                                        <template v-for="(item,index) in arriveOption" :key="index">
                                            <el-option :label="item.label" :value="item.value" />
                                        </template>
                                    </el-select>
                                </el-col>
                                <el-col :span="1"></el-col>
                            </el-form-item>
                            <el-form-item label="到校時間">
                                <el-col :span="1"></el-col>
                                <el-col :span="22">
                                    <el-time-picker v-model="editData.arriveTime" placeholder="Arbitrary time" style="width: 100%;" />
                                </el-col>
                                <el-col :span="1"></el-col>
                            </el-form-item>
                            <el-form-item label="離校時間">
                                <el-col :span="1"></el-col>
                                <el-col :span="22">
                                    <el-time-picker v-model="editData.leaveTime" placeholder="Arbitrary time" style="width: 100%;"/>
                                </el-col>
                                <el-col :span="1"></el-col>
                            </el-form-item>
                            
                        </el-form>
                    </div>
                </template>
                <template v-slot:control>
                    <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
                    <div class="w-full h-auto my-1 px-2 py-1 flex flex-wrap justify-end items-center">
                        <button
                            @click="saveEdit"
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
import { getClassList } from '@/api/parent'
// import { getRoleList,getUserList,setUserEdit } from '@/api/user'
import dialogView from "@/components/dialogView.vue"

const router = useRouter()
const route = useRoute()
const mobileStore = useMobileStore()
const loadStatus = ref(false)
const groupStatus = ref(false)
const userData = ref({})
const editStatus = ref(false)
const userList = ref([])
const totalCount = ref(0)
const page = ref(1)
let sortColumnKey = 'account'
let colSizeObj = {}
const roleData = ref([])
const form = ref({
  class: '',
  date: new Date(),
})
const isMobile = computed(() => {
  return mobileStore.isMobile
})

const onSubmit = () => {
    console.log('submit!')
    console.log('form',form.value)
    editStatus.value = !editStatus.value
    // getUserData()
}

const openSelect = () => {
    groupStatus.value = true
}

const cancel = () => {
    groupStatus.value = false
    editStatus.value = false
}

const editUser = (item) => {
    userData.value = JSON.parse(JSON.stringify(item.row))
    editStatus.value = true
}

const getUserData = async() => {
    // if(loadStatus.value){
    //     return false
    // }
    
    // loadStatus.value = true
    // const formData = new FormData();
    // // formData.append("draw", 99);
    // formData.append("length", 10);
    // formData.append("start", (page.value-1)*10);
    // formData.append("sortColumn",sortColumnKey);
    // if(!colSizeObj[sortColumnKey]){
    //     formData.append("sortColumnDirection",'desc');
    // }else{
    //     formData.append("sortColumnDirection",'asc');
    // }
    // // formData.append("sortColumn", '');
    // // formData.append("sortColumnDirection", '');
    // if(form.value.keyWord){
    //     formData.append("searchValue",form.value.keyWord);
    // }

    // await getUserList(formData).then((res) => {
    //     if(res.data.status){
    //         userList.value = res.data.data
    //         totalCount.value = res.data.totalCount

    //     }else{
    //     }

    //     loadStatus.value = false
    // })
}

const getRoleData = async() => {
    // await getRoleList().then((res) => {
    //     if(res.data.status){
    //         roleData.value = res.data.data.optionList
    //     }
    // })
}

const changePage = (value) => {
    page.value = value
    // getUserData()
}

const saveEdit = async() => {
    console.log('editData',editData.value)

    // const formData = new FormData();
    // formData.append("id", userData.value.id);
    // formData.append("name", userData.value.name);
    // formData.append("nickName", userData.value.nickName);
    // formData.append("gender", userData.value.gender);
    // formData.append("phone", userData.value.phone);
    // formData.append("lineId", userData.value.lineId);
    // formData.append("email", userData.value.email);
    // formData.append("roleId", userData.value.roleId);
    // if(typeof userData.value.birthday == 'string'){
    //     formData.append("birthday", userData.value.birthday);
    // }else{
    //     formData.append("birthday", userData.value.birthday.toISOString());
    // }

    // await setUserEdit(formData).then((res) => {
    //     if(res.data.status){
    //     }
        
    // })

    // // await getUserData()
    // cancel()
    // userData.value = {}

}

const tableRowClassName = (item) => {
    if ((item.rowIndex%2) == 1) {
        return 'even-row'
    }
    return ''
}

const sortCol = (value) => {
    if(sortColumnKey!=value){
        sortColumnKey = value
        // getUserData()
    }
}

const sortSize = (value) => {
    sortColumnKey = value
    if(!colSizeObj[sortColumnKey]){
        colSizeObj[sortColumnKey] = true
    }else{
        colSizeObj[sortColumnKey] = !colSizeObj[sortColumnKey]
    }
    // getUserData()
}

const classList = ref([])
const getClass = () => {
    getClassList().then((res) => {
        if(res.data.status){
            classList.value = res.data.data.optionList

            // console.log('classList.value',classList.value)
        }
    })
}

const arriveOption = ref([])
const getArrive = () => {
    arriveOption.value = [
        {
            "label": "未到校",
            "value": 0
        },
        {
            "label": "已到校",
            "value": 1
        },
        {
            "label": "已離校",
            "value": 2
        },{
            "label": "請假",
            "value": 3
        },
        {
            "label": "其他",
            "value": 4
        },
    ]
}

const editData = ref({
    name:'',
    status:'',
    arriveTime:'',
    leaveTime:''
})

const init = async() => {
    getClass()
    getArrive()
    // getRoleData()
    // await getUserData()
}

init()

</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper){
    width: 200px;
}

:deep(.el-form-item__label) {
    font-size: 16px;
}

@media screen and (max-width: 330px) {
    :deep(.custom-el-form-item .el-form-item__content) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }

}

:deep(.el-table .even-row) {
    --el-table-tr-bg-color: rgb(249 250 251);
}

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

</style>