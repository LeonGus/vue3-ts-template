/**
 * @Description 说点啥
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-16 13:54:50
 * @LastEditors Leon
 * @LastEditTime 2022-09-16 14:02:10
 */
export const useUser = defineStore('user', () => {
  const userAge = ref('22')
  const addAge = () => {
    userAge.value += userAge.value
  }
  return { userAge, addAge }
})
