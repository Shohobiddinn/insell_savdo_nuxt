<template>
    <div class=" dark:bg-DarkPrimary">
        <div class="container mx-auto pt-3 pb-2">
            <div class="flex justify-between items-end">
                <div>
                    <div class="logo">
                        <NuxtImg src="/logo.png" width="150"  />
                    </div>
                </div>
                <div class="flex items-center">
                    <ul class="flex items-center gap-4 mr-4">
                        <li class="font-bold text-[20px] text-Primary" >Kompaniya </li>
                        <li class="font-bold text-[20px] text-Primary" >Xizmatlar</li>
                        <li class="font-bold text-[20px] text-Primary" >Yangiliklar</li>
                        <li class="font-bold text-[20px] text-Primary" >Aloqa</li>
                        <li></li>
                    </ul>
    
                    <SharedColorMode  />
                    <UButton class="bg-Primary ml-3 dark:bg-Primary py-2 px-4 hover:bg-Primary dark:hover:bg-Primary dark:text-white" >Aloqa uchun</UButton>
                </div> 
            </div>
        </div>

    </div>
</template>