<template>
    <div class="fixed top-[8vh] left-0 w-[100vw] md:w-[200px] h-[92vh] bg-[#F8F9FA] flex flex-col justify-start items-center z-50">
        <template v-for="(item,index) in urlData" :key="index">
            <div 
                @click="toLink(item?.url)"
                :class="item?.url ? 'cursor-pointer' : ''"
                class="w-full text-2xl font-medium mt-4 flex flex-wrap justify-center items-center">
                <el-icon v-if="item?.icon">
                    <component :is="item?.icon"></component>
                </el-icon>
                {{item.name}}
            </div>
            <template v-for="(thing,key) in item.children" :key="key">
                <div
                    @click="toLink(thing?.url)" 
                    class="w-full text-2xl font-medium mt-1 flex flex-wrap justify-center items-center cursor-pointer">
                    <el-icon>
                        <component :is="thing.icon"></component>
                    </el-icon>
                    {{thing.name}}
                </div>
            </template>
        </template>

        <!-- <template v-for="(item,index) in testMenuData" :key="index">
            <div 
                @click="testShow(index)"
                :class="item?.url ? 'cursor-pointer' : ''"
                class="w-full text-2xl font-medium mt-4 flex flex-wrap justify-center items-center">
                <el-icon v-if="item?.icon">
                    <component :is="item?.icon"></component>
                </el-icon>
                {{item.name}}
            </div>
            <template v-if="item.openStatus">
                <div
                    v-for="(thing,key) in item.children" :key="key"
                    class="w-full text-2xl font-medium mt-1 flex flex-wrap justify-center items-center">
                    <el-icon>
                        <component :is="thing.icon"></component>
                    </el-icon>
                    {{thing.name}}
                </div>
            </template>
        </template> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { useMenuStore,useMobileStore,useAnnounceStore,useLoginStore,useUserStore } from '@/stores/index'
import { testLogout } from '@/api/api'
import 'animate.css'

const router = useRouter()
const menuStore = useMenuStore()
const mobileStore = useMobileStore()
const announceStore = useAnnounceStore()
const loginStore = useLoginStore()
const userStore = useUserStore()

const urlData = ref([
    {
        name:'使用者管理',
        icon:'User',
        url:'/userView'
    },
    {
        name:'家長管理',
        icon:'Avatar',
        url:'/parentView'
    },
    {
        name:'學生管理',
        icon:'UserFilled',
        url:'/parentView'
    },
    {
        name:'日程管理',
        icon:'Calendar',
        url:'/scheduleView'
    },
    {
        name:'豋出',
        url:'/loginView'
    },
])

// const testMenuData = ref([
//     {
//         name:'test1',
//         icon:'Calendar',
//     },
//     {
//         name:'test2',
//         icon:'Calendar',
//         openStatus:false,
//         children:[
//             {
//                 name:'kid1',
//                 icon:'Calendar',
//             },
//             {
//                 name:'kid2',
//                 icon:'Calendar',
//             },
//         ]
//     },
//     {
//         name:'test3',
//         icon:'Calendar',
//     },
//     {
//         name:'test4',
//         icon:'Calendar',
//         openStatus:false,
//         children:[
//             {
//                 name:'kid3',
//                 icon:'Calendar',
//             },
//             {
//                 name:'kid4',
//                 icon:'Calendar',
//             },
//         ]
//     },
//     {
//         name:'test5',
//         icon:'Calendar',
//     },
// ])

// const testShow = (index) => {
//     console.log('testShow',testMenuData.value[index])
//     testMenuData.value[index].openStatus = !testMenuData.value[index].openStatus
// }

const toLink = async(url) => {
    if(url){
        if(url=='/loginView'){

            await testLogout().then((res) => {
                // console.log('res',res)
                loginStore.clearToken()
                userStore.clearUserInformation()
                router.push({path:'/loginView'})
            })

            return false
        }

        if(url == '/announcementView'){
            announceStore.openAnnounce()
            return false
        }

        router.push({path:url})
        if(mobileStore.isMobile){
            menuStore.closeMenu()
        }
    }
    
}


</script>

<style lang="scss" scoped>

</style>