<template>
    <section 
    id="contact"
    class="relative bg-[#F4F5F9] w-full h-[1600px] xl:h-screen flex justify-center items-center">
        <div class="max-w-[75%] w-full">
            <ul class="font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[48px] text-gradient-4-colors mb-10">
                <li>Contact</li>
            </ul>

            <div class="w-full flex flex-row justify-center items-start gap-6 mx-auto">
                <div class="w-full xl:w-1/2">
                    <form 
                    @submit="submitForm" 
                    id="form">
                        <input type="hidden" name="access_key" value="9220bf48-6e83-4f37-8cf9-ad5d0ab81f8f">
                        <input type="hidden" name="subject" value="Gaobang 高邦創意 官方網站 - 合作申請">
                    <div class="flex flex-col md:flex-row">
                    <div 
                    class="w-full md:w-1/2 px-0 sm:px-20 md:pl-16 md:pr-2 xl:px-2">

                    <label 
                    for="name"
                    class="block uppercase tracking-[1px] text-[#606060] text-[14px] mb-2 w-full font-GenJyuuGothicRegular">
                        姓名
                    </label>
                    <input 
                    id="name"
                    name="姓名"
                    v-model="form.name"
                    class="appearance-none block w-full bg-white text-[#606060] text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicRegular"  
                    :class="{'border-green-500': validateField('name')}"
                    type="text"
                    required>

                    <label 
                    for="company"
                    class="block uppercase tracking-[1px] text-[#606060] text-[14px] mb-2 w-full font-GenJyuuGothicRegular">
                        公司名稱
                    </label>
                    <input 
                    id="company"
                    name="公司名稱"
                    v-model="form.company"
                    class="appearance-none block w-full bg-white text-[#606060] text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicRegular"  
                    :class="{'border-green-500': validateField('company')}"
                    type="text"
                    required>

                    <label 
                    for="email"
                    name="信箱帳號"
                    class="block uppercase tracking-[1px] text-[#606060] text-[14px] mb-2 w-full font-GenJyuuGothicRegular">
                        EMAIL
                    </label>
                    <input 
                    id="email"
                    v-model="form.email"
                    class="appearance-none block w-full bg-white text-gray-500 text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicRegular"  
                    :class="{'border-green-500': validateField('email')}"
                    type="email"
                    required>

                    <label 
                    for="category"
                    class="block uppercase tracking-[1px] text-[#606060] text-[14px] mb-2 w-full font-GenJyuuGothicRegular">
                        合作類別
                    </label>
                    <input 
                    id="category"
                    name="合作類別"
                    v-model="form.category"
                    class="appearance-none block w-full bg-white text-[#606060] text-[14px] border-2 rounded-xl py-2 px-3 mb-3 font-GenJyuuGothicRegular"  
                    :class="{'border-green-500': validateField('category')}"
                    type="text"
                    required>

                    </div>
                    <div 
                    class="w-full md:w-1/2 h-[280px] px-0 sm:px-20 md:pr-16 md:pl-2 xl:px-2">

                        <label 
                        for="message"
                        class="block uppercase tracking-[1px] text-[#606060] text-[14px] mb-2 w-full font-GenJyuuGothicRegular">
                        期望合作的內容概述
                        </label>
                        <textarea 
                        id="message"
                        v-model="form.message"
                        name="期望合作的內容概述" 
                        rows="6" 
                        class="block w-full h-full bg-white rounded-xl text-[#606060] text-[14px] border-2 py-2 px-3 mb-3 font-GenJyuuGothicRegular"
                        :class="{'border-green-500': validateField('message')}"
                        required></textarea>

                    </div>
                    </div>
                        <div 
                        class="flex justify-center items-center w-full mt-16 sm:mt-6 mb-10">
                        <button 
                        type="submit"
                        :disabled="isSubmitting || !isValid"
                        class="rounded-2xl px-8 py-2 text-[14px] text-white font-GenJyuuGothicRegular inline-flex justify-center items-center"
                        :class="{'opacity-100 cursor-not-allowed': !isValid}"
                        style="background: linear-gradient(to right, #9A1184 0%, #E33733 35%, #F4BF20 70%);">
                            {{ isSubmitting ? 'SUBMIT' : 'SUBMIT' }}
                        </button>
                        </div>
                    </form>

                </div>

            </div>

            <div class="flex flex-col justify-center items-center mb-40 2xl:mb-0">
                <h5 class="hidden xl:flex font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[28px] xl:text-[24px] contact-text-gradient-4-colors mb-4">期待您的加入，與我們一同創造無限可能。</h5>
                <h5 class="flex xl:hidden font-GenJyuuGothicBold tracking-[1px] sm:tracking-[1px] text-[28px] xl:text-[24px] contact-text-gradient-4-colors mb-4 text-center">期待您的加入，<br>與我們一同創造無限可能。</h5>
                <p class="text-[12px] text-[#606060] tracking-[2px] text-center font-GenJyuuGothicRegular">Make dreams come true, make everything happen.</p>
            </div>
        </div>
    <footer class="w-full absolute bottom-0 h-[60px] bg-[#242870] hidden xl:flex">
        <div class="flex justify-between items-center h-full px-10 text-white w-full">
            <div class="flex-1 flex justify-start items-center">
                <ul class="flex flex-row gap-8 justify-center items-center">
                    <li>
                      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src="/gaobang.png" alt="logo" class="w-[35px]" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@example.com">
                        <img src="/mail.png" alt="mail" class="w-[35px]" />
                      </a>
                    </li>
                </ul>
            </div>
            <div class="flex-1 text-[12px] text-center tracking-[1.5px] font-GenJyuuGothicRegular">台北辦公室：台北市大同區市民大道一段209號12樓</div>
            <div class="flex-1 text-[12px] text-center tracking-[1.5px] font-GenJyuuGothicRegular">Copyright © 2025 GAO BANG CREATIVITY All Rights Reserved 2021</div>
        </div>
    </footer>
    <footer class="flex xl:hidden w-full absolute bottom-0 h-[240px] bg-[#242870]">
        <div class="flex flex-col justify-center items-center h-full px-10 text-white">
            <div class="flex justify-start items-center my-6">
                <ul class="flex flex-row gap-8 justify-center items-center">
                    <li>
                      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src="/gaobang.png" alt="logo" class="w-[35px]" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@example.com">
                        <img src="/mail.png" alt="mail" class="w-[35px]" />
                      </a>
                    </li>
                </ul>
            </div>
            <div class="text-[10px] text-center tracking-[1.25px] font-GenJyuuGothicRegular">台北辦公室：台北市大同區市民大道一段209號12樓</div>
            <hr class="bg-white h-[1px] w-full my-6">
            <div class="text-[10px] text-center tracking-[1.25px] font-GenJyuuGothicRegular">Copyright © 2025 GAO BANG CREATIVITY All Rights Reserved 2021</div>
        </div>
    </footer>
    </section>
</template>

<script setup>
    import { toast } from 'vue3-toastify';

    const isSubmitting = ref(false);

    const form = reactive({
      name: '',
      company: '',
      email: '',
      category: '',
      message: ''
    });

    const isValid = computed(() => {
      return form.name && form.company && form.email && form.category && form.message;
    });

    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const validateField = (field) => {
      if (field === 'email') {
        return form[field] !== '' && validateEmail(form[field]);
      }
      return form[field] !== '';
    };
    
    const submitForm = async (event) => {
      event.preventDefault();
      isSubmitting.value = true;
      //
      const submitData = {
        access_key: '9220bf48-6e83-4f37-8cf9-ad5d0ab81f8f',
        subject: 'Gaobang 高邦創意 官方網站 - 合作申請',
        姓名: form.name,
        公司名稱: form.company,
        信箱帳號: form.email,
        合作類別: form.category,
        期望合作的內容概述: form.message
      };

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(submitData)
        });

        const result = await response.json();
        if (response.status === 200) {
          // 清空表單
          Object.keys(form).forEach(key => {
            form[key] = '';
          });
          
          // 
          toast("提交成功，我們會盡快與您聯繫！", {
            "position": "top-right",
            "theme": "auto",
            "type": "success",
            "autoClose": 3000,
            "toastClassName" : "font-GenJyuuGothicRegular text-[14px] text-gray-700 tracking-[1px]",
            "dangerouslyHTMLString": true
          });
        } else {
          console.log(response);
          formResult.value = result.message;
        }
      } catch (error) {
        console.log(error);
        toast("提交失敗，請重試。", {
            "position": "top-right",
            "theme": "auto",
            "type": "error",
            "autoClose": 3000,
            "toastClassName" : "font-GenJyuuGothicRegular text-[14px] text-gray-700 tracking-[1px]",
            "dangerouslyHTMLString": true
        });
      } finally {
        isSubmitting.value = false;
      }
    };

</script>