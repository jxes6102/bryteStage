<template>
    <div 
        class="w-full h-[100vh] flex flex-col justify-start items-start"
    >
        <div class="w-full my-3 px-3 text-3xl flex flex-wrap justify-start items-center">
            日程管理
        </div>
        <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
        <el-calendar 
            ref="calendar" 
            class="w-[95vw] md:w-[75vw] flex flex-wrap justify-center md:justify-start items-center">
            <template #header="{ date }">
                <div class="flex flex-col justify-center items-center">
                    <!-- <span>Custom header content</span> -->
                    <span class="text-2xl">{{ date }}</span>
                    <el-button-group>
                        <!-- <el-button size="small" @click="selectDate('prev-year')">
                            上一年
                        </el-button> -->
                        <el-button style="font-size:16px;" size="small" @click="selectDate('prev-month')">
                            上一月
                        </el-button>
                        <el-button style="font-size:16px;" size="small" @click="selectDate('today')">今天</el-button>
                        <el-button style="font-size:16px;" size="small" @click="selectDate('next-month')">
                            下一月
                        </el-button>
                        <!-- <el-button size="small" @click="selectDate('next-year')">
                            下一年
                        </el-button> -->
                    </el-button-group>
                </div>
                
            </template>
        </el-calendar>
    </div>
</template>

<script setup>
/*eslint-disable*/
import { ref,computed } from "vue"
import { useRouter,useRoute } from "vue-router"
import { useMobileStore } from '@/stores/index'
// import { getRoleList,getUserList,setUserEdit } from '@/api/api'
import dialogView from "@/components/dialogView.vue"

const router = useRouter()
const route = useRoute()
const mobileStore = useMobileStore()

const isMobile = computed(() => {
  return mobileStore.isMobile
})

const calendar = ref(null)
const selectDate = (val) => {
    if (!calendar.value){
        return false
    }
    console.log('val',val)
    console.log('calendar.value',calendar.value)
    calendar.value.selectDate(val)
}


const init = async() => {
    console.log('init')
}

init()

</script>

<style lang="scss" scoped>

</style>