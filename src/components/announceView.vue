<template>
    <div v-if="!isMobile" class="absolute w-auto h-auto top-0 left-0 flex flex-col justify-center items-center z-[9998]">
        <div
            @click="tohome"
            class="absolute w-auto h-auto top-0 right-0 p-2 flex flex-wrap justify-center items-center cursor-pointer z-[20]">
            <el-icon size="50"><Close /></el-icon>
        </div>
        <div
            @click="setVolume"
            class="absolute w-auto h-auto top-0 right-[50px] p-2 flex flex-wrap justify-center items-center cursor-pointer z-[20]">
            <el-icon v-if="volume" size="50"><Microphone /></el-icon>
            <el-icon v-else size="50"><Mute /></el-icon>
        </div>
        <div class="w-[100vw] h-[100vh] bg-[#F0F8FF] flex flex-wrap justify-center items-center overflow-hidden">
            <div 
                class="w-[50%] h-[100vh] bg-[#F0F8FF] border-r-2 border-[#B0BEC5] flex flex-col justify-start items-center">
                <transition
                        enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut"
                    >
                    <div class="relative w-full h-[80px] rounded-lg bg-slate-50 my-1 flex flex-wrap justify-center items-center">
                        <div class="absolute top-0 left-[5px] w-[5vw] h-[5vw] max-w-[80px] max-h-[80px] rounded-full ">
                            <img src="@/assets/img/monkey.png" alt="">
                        </div>
                        <div class="w-full text-4xl font-bold flex flex-wrap justify-center items-center">等待區</div>
                    </div>
                </transition>
                <div class="w-full flex flex-wrap justify-center items-center">
                    <transition-group 
                        name="fade"
                        enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut"
                    >
                        <div
                            v-for="(item,index) in callShow.wait" :key="index"
                            :class="(false) ? 'w-[95%]' : 'w-[48%] mx-[2px]'"
                            class=" h-[auto] rounded-lg bg-slate-50 mt-1 text-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-wrap justify-center items-center">
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto font-semibold px-1">{{item.studentNumber + '號'}}</div>
                                <div class="w-auto font-semibold px-1">{{item.studentUserName}}</div>
                            </div>
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto text-center font-semibold px-1">{{'稱謂:'+item.parentTitle}}</div>
                                <div class="w-auto text-center font-semibold px-1">{{'家長:'+item.parentUserName}}</div>
                            </div>
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto text-center font-semibold">抵達情況:</div>
                                <div class="w-auto text-center font-semibold">{{ item.message}}</div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
            <div 
                class="w-[50%] h-[100vh] bg-[#F0F8FF] border-l-2 border-[#B0BEC5] flex flex-col justify-start items-center">
                <transition
                        enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut"
                    >
                    <div class="relative w-full h-[80px] rounded-lg bg-slate-50 my-1 flex flex-wrap justify-center items-center">
                        <div class="absolute top-0 left-[5px] w-[5vw] h-[5vw] max-w-[80px] max-h-[80px] rounded-full ">
                            <img src="@/assets/img/ox.png" alt="">
                        </div>
                        <div class="w-full text-4xl font-bold flex flex-wrap justify-center items-center">抵達區</div>
                    </div>
                </transition>
                <div class="w-full flex flex-wrap justify-center items-center">
                    <transition-group 
                        name="fade"
                        enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut"
                    >
                        <div
                            v-for="(item,index) in callShow.arrive" :key="index"
                            :class="(false) ? 'w-[95%]' : 'w-[48%] mx-[2px]'"
                            class=" h-[auto] rounded-lg bg-slate-50 mt-1 text-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-wrap justify-center items-center">
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto font-semibold px-1">{{item.studentNumber + '號'}}</div>
                                <div class="w-auto font-semibold px-1">{{item.studentUserName}}</div>
                            </div>
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto text-center font-semibold px-1">{{'稱謂:'+item.parentTitle}}</div>
                                <div class="w-auto text-center font-semibold px-1">{{'家長:'+item.parentUserName}}</div>
                            </div>
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto text-center font-semibold">抵達情況:</div>
                                <div class="w-auto text-center font-semibold">{{ item.message}}</div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
            <!-- <div 
                v-for="(item,index) in 4" :key="index"
                class="w-[25%] h-[100vh] bg-[#F0F8FF] border-2 border-[#F2FFFF] flex flex-col justify-start items-center">
                <transition
                        enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut"
                    >
                    <div v-if="showList[index]?.class" class="relative w-full h-[80px] rounded-lg bg-slate-50 my-1 flex flex-wrap justify-center items-center">
                        <div class="absolute top-0 left-[5px] w-[5vw] h-[5vw] max-w-[80px] max-h-[80px] rounded-full ">
                            <img :src="getImageUrl(showList[index]?.img)" alt="">
                        </div>
                        <div class="w-full text-4xl font-bold flex flex-wrap justify-center items-center">{{ showList[index]?.class }} </div>
                        <div class="w-full text-xl font-bold flex flex-wrap justify-center items-center">{{ '導師:' + showList[index]?.teacher }} </div>
                    </div>
                </transition>
                <div class="w-full flex flex-wrap justify-center items-center">
                    <transition-group 
                        name="fade"
                        enter-active-class="animate__animated animate__fadeIn"
                        leave-active-class="animate__animated animate__fadeOut"
                    >
                        <div
                            v-for="(thing,key) in showList[index]?.crowd" :key="key"
                            :class="(showList[index]?.crowd.length <= maxCount) ? 
                                'w-[95%]' : 'w-[48%] mx-[2px]'"
                            class=" h-[auto] rounded-lg bg-slate-50 mt-1 text-xs lg:text-sm xl:text-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-wrap justify-center items-center">
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto font-semibold">{{thing.number + '號'}}</div>
                                <div class="w-auto font-semibold">{{thing.name}}</div>
                            </div>
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto text-center font-semibold">接送人員:</div>
                                <div v-if="thing.isMom" class="w-auto text-[#F08080] text-center font-semibold">媽媽</div>
                                <div v-else class="w-auto text-[#0000CD] text-center font-semibold">爸爸</div>
                            </div>
                            <div class="w-full flex flex-wrap justify-center items-center">
                                <div class="w-auto text-center font-semibold">抵達情況:</div>
                                <div v-if="thing.isArrive" class="w-auto text-[#DC143C] text-center font-semibold">{{ thing.time + '分抵達'}}</div>
                                <div v-else class="w-auto text-[#79FF79] text-center font-semibold">已抵達</div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div> -->
        </div>
        <!-- <Teleport to="body">
            <dialogView layer="9999" type="small" v-if="true">
                <template v-slot:title>
                    <div class="w-full my-[1px] md:my-1 px-2 py-[1px] md:py-1 text-2xl">選單</div>
                    <div class="line-style w-[100%] text-[#D3D3D3] flex"></div>
                </template>
                <template v-slot:message>
                    <div class="w-full h-[200px] p-4 flex flex-col justify-between items-center gap-y-[20px]">
                        <div class="w-[95%] md:w-[90%] text-2xl p-2 border-[1px] border-black rounded-lg flex flex-wrap justify-center items-center">編輯基本資料</div>
                        <div class="w-[95%] md:w-[90%] text-2xl p-2 border-[1px] border-black rounded-lg flex flex-wrap justify-center items-center">編輯橫幅</div>
                        <div class="w-[95%] md:w-[90%] text-2xl text-gray-400 p-2 border-[1px] border-gray-400 rounded-lg flex flex-wrap justify-center items-center">編輯簡介(製作中)</div>
                    </div>
                </template>
            </dialogView>
        </Teleport> -->
    </div>
    <div class="absolute w-[100vw] h-[100vh] top-0 left-0 bg-white flex flex-col justify-center items-center z-[9999]" v-else>
        <div class="text-2xl">此畫面無法用手機開啟</div>
        <div
            @click="tohome"
            class="absolute w-auto h-auto top-0 right-0 p-2 flex flex-wrap justify-center items-center">
            <el-icon size="50"><Close /></el-icon>
        </div>
    </div>
    
    
    
</template>

<script setup>
import { getCall,initTodayRollCall,initTodayPickup } from '@/api/api'
import { ref,computed,onBeforeUnmount,onMounted } from 'vue'
import { useRouter } from "vue-router";
// import dialogView from "@/components/dialogView.vue"
import { useMenuStore,useMobileStore,useheaderStore,useAnnounceStore } from '@/stores/index'
import 'animate.css'

const router = useRouter()
const menuStore = useMenuStore()
const mobileStore = useMobileStore()
const headerStore = useheaderStore()
const announceStore = useAnnounceStore()

// {
//     "data": 
//     [
//         {
//             // 班級名稱
//             "className": string,
//             // 班級代碼
//             "classCode": string,
//             // 老師姓名
//             "teacherUserName": string,
//             // 班級接送資訊
//             "pickupList": 
//             [
//                 {
//                     // id
//                     "id": string,
//                     // 班級名稱
//                     "className": string,
//                     // 班級代碼
//                     "classCode": string,
//                     // 老師姓名
//                     "teacherUserName": string,
//                     // 學生姓名
//                     "studentUserName": string,
//                     // 學生號碼
//                     "studentNumber": number,
//                     // 接送日期
//                     "scheduleDate": Date,
//                     // 家長姓名
//                     "parentUserName": string,
//                     // 家長稱謂
//                     "parentTitle": string,
//                     // 預計接送時間(分鐘)
//                     "pickupTime": number,
//                     // 接送狀態：
//                     // 1. 在校
//                     // 2. 等待接送但家長尚未選擇接送時間
//                     // 3. 等待接送
//                     // 4. 等待接送且家長已抵達
//                     // 5. 已接送完成
//                     "state": number
//                 }
//             ]
//         }
//     ],
//     // 狀態：true成功、false失敗
//     "status": boolean,
//     // 訊息
//     "message": string
// }

// 接送狀態：
// 1. 在校
// 2. 等待接送但家長尚未選擇接送時間
// 3. 等待接送
// 4. 等待接送且家長已抵達
// 5. 已接送完成
const testData = [
    {
        "className": '猴子班',
        "classCode": 123,
        "teacherUserName": "侯O長",
        "pickupList": 
        [
            {
                "id": 1,
                "className": '猴子班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '猴子一',
                "studentNumber": 1,
                "scheduleDate": '',
                "parentUserName": "公猴一",
                "parentTitle": "爸爸",
                "pickupTime": '4',
                "state": 2
            },
            {
                "id": 2,
                "className": '猴子班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '猴子二',
                "studentNumber": 2,
                "scheduleDate": '',
                "parentUserName": "母猴二",
                "parentTitle": "媽媽",
                "pickupTime": '7',
                "state": 4
            },
            {
                "id": 3,
                "className": '猴子班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '猴子三',
                "studentNumber": 3,
                "scheduleDate": '',
                "parentUserName": "公猴三",
                "parentTitle": "爸爸",
                "pickupTime": '9',
                "state": 3
            },
            {
                "id": 4,
                "className": '猴子班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '母猴四',
                "studentNumber": 4,
                "scheduleDate": '',
                "parentUserName": "母猴四",
                "parentTitle": "媽媽",
                "pickupTime": '1',
                "state": 2
            },
        ]
    },
    {
        "className": '老鼠班',
        "classCode": 123,
        "teacherUserName": "王O殊",
        "pickupList": [
            {
                "id": 1,
                "className": '老鼠班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '老鼠一',
                "studentNumber": 1,
                "scheduleDate": '',
                "parentUserName": "公鼠一",
                "parentTitle": "爸爸",
                "pickupTime": '3',
                "state": 3
            },
            {
                "id": 2,
                "className": '老鼠班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '老鼠二',
                "studentNumber": 2,
                "scheduleDate": '',
                "parentUserName": "母鼠二",
                "parentTitle": "媽媽",
                "pickupTime": '3',
                "state": 4
            },
            {
                "id": 3,
                "className": '老鼠班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '老鼠三',
                "studentNumber": 3,
                "scheduleDate": '',
                "parentUserName": "公鼠三",
                "parentTitle": "爸爸",
                "pickupTime": '7',
                "state": 3
            },
            {
                "id": 4,
                "className": '老鼠班',
                "classCode": 123,
                "teacherUserName": '侯O長',
                "studentUserName": '老鼠四',
                "studentNumber": 4,
                "scheduleDate": '',
                "parentUserName": "母鼠四",
                "parentTitle": "媽媽",
                "pickupTime": '4',
                "state": 4
            },
        ]
    },
    {
        "className": '黃牛班',
        "classCode": 123,
        "teacherUserName": "牛O古",
        "pickupList": [
            {
                "id": 1,
                "className": '黃牛班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '黃牛一',
                "studentNumber": 1,
                "scheduleDate": '',
                "parentUserName": "公牛一",
                "parentTitle": "爸爸",
                "pickupTime": '9',
                "state": 2
            },
            {
                "id": 2,
                "className": '黃牛班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '黃牛二',
                "studentNumber": 2,
                "scheduleDate": '',
                "parentUserName": "母牛二",
                "parentTitle": "媽媽",
                "pickupTime": '7',
                "state": 3
            },
            {
                "id": 3,
                "className": '黃牛班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '黃牛三',
                "studentNumber": 3,
                "scheduleDate": '',
                "parentUserName": "公牛三",
                "parentTitle": "爸爸",
                "pickupTime": '4',
                "state": 4
            },
            {
                "id": 4,
                "className": '黃牛班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '黃牛四',
                "studentNumber": 4,
                "scheduleDate": '',
                "parentUserName": "母牛四",
                "parentTitle": "媽媽",
                "pickupTime": '2',
                "state": 4
            },
        ]
        
    },
    {
        "className": '老虎班',
        "classCode": 123,
        "teacherUserName": "牛O古",
        "pickupList": [
            {
                "id": 1,
                "className": '老虎班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '老虎一',
                "studentNumber": 1,
                "scheduleDate": '',
                "parentUserName": "公虎一",
                "parentTitle": "爸爸",
                "pickupTime": '6',
                "state": 2
            },
            {
                "id": 2,
                "className": '老虎班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '老虎二',
                "studentNumber": 2,
                "scheduleDate": '',
                "parentUserName": "母虎二",
                "parentTitle": "媽媽",
                "pickupTime": '3',
                "state": 2
            },
            {
                "id": 3,
                "className": '老虎班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '老虎三',
                "studentNumber": 3,
                "scheduleDate": '',
                "parentUserName": "公虎三",
                "parentTitle": "爸爸",
                "pickupTime": '9',
                "state": 3
            },
            {
                "id": 4,
                "className": '老虎班',
                "classCode": 123,
                "teacherUserName": '牛O古',
                "studentUserName": '老虎四',
                "studentNumber": 4,
                "scheduleDate": '',
                "parentUserName": "母虎四",
                "parentTitle": "媽媽",
                "pickupTime": '1',
                "state": 4
            },
        ]
        
    }
]

const volume = ref(0)
const setVolume = () => {
    if(volume.value){
        volume.value = 0
    }else{
        volume.value = 1
    }
}
let musicList = ["測試一號","測試二號","測試三號","測試四號"]
const playMusic = (text) => {
    if(typeof speechSynthesis){
        const msg = new SpeechSynthesisUtterance(text);
        msg.volume = volume.value
        window.speechSynthesis.speak(msg);
    }
}
playMusic("可樂狗")
let musicTimer = null
const createMusicTimer = () =>  {
    musicTimer = setInterval(() => {
        
        console.log('test',musicList[0]);
        if(musicList.length){
            
            playMusic(musicList[0])
            musicList.shift()
        }
        
    }, 3000);
}

setTimeout(() => {
    musicList.push("測試五號","測試六號","測試七號","測試八號")
}, 30000);

setTimeout(() => {
    musicList.push("測試九號","測試十號")
}, 60000);

const callData = ref([])
const callShow = computed(() => {
    let target = {
        wait:[],
        arrive:[]
    }
    if(!callData.value.length){
        return target
    }
    
    for(let i = 0;i<callData.value.length;i++){
        let classArr = callData.value[i].pickupList
        for(let j = 0;j<classArr.length;j++){
            let obj = Object.assign({}, classArr[j], {message:''})
            if(obj.state == 2){
                obj.message = '等待中'
                target.wait.push(obj)
            }else if(obj.state == 3){
                obj.message = '剩餘'+obj.pickupTime+'分'
                target.wait.push(obj)
            }else if(obj.state == 4){
                obj.message = '已抵達'
                target.arrive.push(obj)
            }
        }
    }
    target.wait = target.wait.slice(0,maxCount.value*2)
    target.arrive = target.arrive.slice(0,maxCount.value*2)
    return target
})
const getCallData = async() => {
    // console.log('call api')
    await getCall().then((res) => {
        // console.log('res',res.data)
        if(res.data.status){
            callData.value = res.data.data
            // callData.value = testData
            // console.log('callData',callData.value)
            // console.log('callShow',callShow.value)
        }else{
            console.log(res.data.message)
        }
    })
}
let callTimer = null
const createCallTimer = () =>  {
    callTimer = setInterval(() => {
        
        getCallData()
    }, 5000);
}

// initTodayRollCall initTodayPickup
const initCallData = async() => {
    let date = new Date()
    let oldDate = localStorage.getItem('date')

    if(oldDate){
        localStorage.setItem('date',date.getDate())
    }
    oldDate = localStorage.getItem('date')
    if(!(oldDate == date.getDate().toString())){
        await initTodayRollCall().then((res) => {
            // console.log('res',res)
        })
        await initTodayPickup().then((res) => {
            // console.log('res',res)
        })
        localStorage.setItem('date',date.getDate())
    }    
}

onMounted(() => {
    headerStore.closeHeader()
    menuStore.closeMenu()
    initCallData()
    getCallData()
    createMusicTimer()
    createCallTimer()
})

onBeforeUnmount(() => {
    headerStore.openHeader()
    menuStore.openMenu()
    window.clearInterval(timer.value)
    window.clearInterval(musicTimer)
    window.clearInterval(callTimer)
    
})

const list = ref([
    {
        class:'猴子班',
        teacher:'曾O義',
        img:'img/monkey.png',
        crowd:[ 
            {
                number:1,
                name:'猴子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'猴子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'猴子三號',
                time:'15',
                isMom:false,
                isArrive:false,
            },
            {
                number:4,
                name:'猴子四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
            {
                number:1,
                name:'猴子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'猴子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'猴子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'猴子四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
            {
                number:1,
                name:'猴子一號',
                time:'32',
                isMom:false,
                isArrive:false,
            },
            {
                number:2,
                name:'猴子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'猴子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'猴子四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
            {
                number:1,
                name:'猴子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'猴子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'猴子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'猴子四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
            {
                number:1,
                name:'猴子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'猴子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'猴子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'猴子四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
            {
                number:1,
                name:'猴子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'猴子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'猴子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'猴子四號',
                time:'21',
                isMom:false,
                isArrive:true,
            },
            {
                number:1,
                name:'猴子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'猴子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'猴子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'猴子四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },

        ]
    },
    {
        class:'老鼠班',
        teacher:'曾O義',
        img:'img/mouse.png',
        crowd:[ 
            {
                number:1,
                name:'老鼠一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'老鼠二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'老鼠三號',
                time:'15',
                isMom:false,
                isArrive:false,
            },
            {
                number:4,
                name:'老鼠四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
    {
        class:'黃牛班',
        teacher:'曾O義',
        img:'img/ox.png',
        crowd:[ 
            {
                number:1,
                name:'黃牛一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'黃牛二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'黃牛三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'黃牛四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
    {
        class:'老虎班',
        teacher:'曾O義',
        img:'img/tiger.png',
        crowd:[ 
            {
                number:1,
                name:'老虎一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'老虎二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'老虎三號',
                time:'15',
                isMom:false,
                isArrive:false,
            },
            {
                number:4,
                name:'老虎四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
    {
        class:'兔子班',
        teacher:'曾O義',
        img:'img/tiger.png',
        crowd:[ 
            {
                number:1,
                name:'兔子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'兔子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'兔子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'兔子四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
    {
        class:'河馬班',
        teacher:'曾O義',
        img:'img/ox.png',
        crowd:[ 
            {
                number:1,
                name:'河馬一號',
                time:'32',
                isMom:false,
                isArrive:false,
            },
            {
                number:2,
                name:'河馬二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'河馬三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'河馬四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
    {
        class:'綿羊班',
        teacher:'曾O義',
        img:'img/mouse.png',
        crowd:[ 
            {
                number:1,
                name:'綿羊一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'綿羊二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'綿羊三號',
                time:'15',
                isMom:false,
                isArrive:false,
            },
            {
                number:4,
                name:'綿羊四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
    {
        class:'螃蟹班',
        teacher:'曾O義',
        img:'img/monkey.png',
        crowd:[ 
            {
                number:1,
                name:'螃蟹一號',
                time:'32',
                isMom:false,
                isArrive:false,
            },
            {
                number:2,
                name:'螃蟹二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'螃蟹三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'螃蟹四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
    {
        class:'貓咪班',
        teacher:'曾O義',
        img:'img/monkey.png',
        crowd:[ 
            {
                number:1,
                name:'貓咪一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'貓咪二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'貓咪三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'貓咪四號',
                time:'21',
                isMom:false,
                isArrive:true,
            },
        ]
    },
    {
        class:'獅子班',
        teacher:'曾O義',
        img:'img/mouse.png',
        crowd:[ 
            {
                number:1,
                name:'獅子一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'獅子二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'獅子三號',
                time:'15',
                isMom:true,
                isArrive:false,
            },
            {
                number:4,
                name:'獅子四號',
                time:'21',
                isMom:false,
                isArrive:true,
            },
        ]
    },
    {
        class:'蠑螈班',
        teacher:'曾O義',
        img:'img/ox.png',
        crowd:[ 
            {
                number:1,
                name:'蠑螈一號',
                time:'32',
                isMom:true,
                isArrive:false,
            },
            {
                number:2,
                name:'蠑螈二號',
                time:'43',
                isMom:true,
                isArrive:true,
            },
            {
                number:3,
                name:'蠑螈三號',
                time:'15',
                isMom:false,
                isArrive:false,
            },
            {
                number:4,
                name:'蠑螈四號',
                time:'21',
                isMom:true,
                isArrive:true,
            },
        ]
    },
])
const timer = ref(null)
const showIndex = ref(0)
const maxCount = ref(0)
const showList = computed(() => {
    let target = []
    target = list.value.slice(showIndex.value*4,showIndex.value*4+4)
    for(let index in target){
        target[index].crowd = target[index].crowd.slice(0,maxCount.value*2)
    }
  return target
})
const isMobile = computed(() => {
  return mobileStore.isMobile
})
const init = () => {
    headerStore.closeHeader()
    menuStore.closeMenu()
    maxCount.value = Math.floor((window.innerHeight - 80)/90) 
    // console.log(maxCount.value)

    timer.value = window.setInterval(( () => {
        let max = Math.floor(list.value.length/4)
        if(showIndex.value >= max) {
            showIndex.value = 0
        }else{
            showIndex.value++
        }
        //console.log('showList',showList.value)

    }), 5000);
}

init()

const tohome = () => {
    announceStore.closeAnnounce()
}

// //延遲設定
// const delay = () => {   
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('delay');
//         }, 2000);
//     });
// }

const getImageUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
};

</script>

<style lang="scss" scoped>
.fade-enter-active, 
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}
</style>