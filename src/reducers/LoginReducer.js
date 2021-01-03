import { SIGNUP, CODE } from '../constants/ActionType'

function reducer(state, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        signup: true,
        code: false
      }

    case CODE:
      return {
        signup: false,
        code: true
      }
    // case MOBILE:
    //   let mobileNum = action.mobileNum
    //   return {
    //     signup: false,
    //     code: false,
    //     mobile: mobileNum
    //   }

    default:
      return {
        signup: false,
        code: false
      }
  }
}
export default reducer
