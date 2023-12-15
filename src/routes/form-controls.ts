export default {
  name: 'form-controls',
  path: '/form-controls',
  redirect: '/inputs',
  children: [
    {
      name: 'inputs',
      path: '/inputs',
      component: () => import(
        '../pages/InputPage.vue',
      ),
    },
    {
      name: 'checkboxes',
      path: '/checkboxes',
      component: () => import(
        '../pages/CheckboxPage.vue',
      ),
    },
    {
      name: 'selects',
      path: '/selects',
      component: () => import(
        '../pages/SelectPage.vue',
      ),
    },
    {
      name: 'fileinputs',
      path: '/file-inputs',
      component: () => import(
        '../pages/FileInputPage.vue',
      ),
    },
    {
      name: 'datetimeinputs',
      path: '/datetime-inputs',
      component: () => import(
        '../pages/DatetimeInputPage.vue',
      ),
    },
    {
      name: 'phonenumberinput',
      path: '/phone-number-input',
      component: () => import(
        '../pages/PhoneInputPage.vue',
      ),
    },
  ],
}
