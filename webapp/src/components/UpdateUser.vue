<template>
  <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+ `${this.userData?.user_id}`"><i class="bi bi-gear-fill"></i>Update</button>

    <div class="modal fade" :id="'exampleModal' + `${this.userData?.user_id}`" tabindex="-1" aria-labelledby="exampleLabels" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleLabels">Update Form</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <h2 class="display-5">Update User</h2>
                    </div>
                    <div class="row">
                        <div class="col">                 
                            <div class="form-control-wrapper w-100 pb-3 m-auto">  
                              <span class="inline">
                                <input class="form-control" type="text" :value="this.userData?.firstName" placeholder="First name"/>   
                                </span>
                              </div>
                              
                              <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                  <span class="inline">
                                    <input type="text" class="form-control" :value="this.userData?.lastName" placeholder="Last name">
                                  </span>          
                              </div>
                              
                              <div class="d-flex ">
                                <div class="form-check form-check-inline w-100 pb-3 m-auto">
                                  <input class="form-check-input" :value="this.userData?.gender" type="radio" name="inlineRadioOptions" id="femaleGender"
                                    value="Female" checked />
                                  <label class="form-check-label" for="femaleGender">Female</label>
                                </div>
                                <div class="form-check form-check-inline w-100 pb-3 m-auto">
                                  <input class="form-check-input" :value="this.userData?.gender" type="radio" name="inlineRadioOptions" id="maleGender"
                                    value="Male" />
                                  <label class="form-check-label" for="maleGender">Male</label>
                                </div>
                                <div class="form-check form-check-inline w-100 pb-3 m-auto">
                                  <input class="form-check-input" :value="this.userData?.gender" type="radio" name="inlineRadioOptions" id="otherGender"
                                    value="Other" />
                                  <label class="form-check-label" for="otherGender">Other</label>
                                </div>
                              </div>
                              
                              <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                  <span class="inline">
                                    <input type="text" class="form-control" :value="this.userData?.cellphoneNumber" placeholder="Cellphone" maxlength="12">
                                  </span>        
                              </div>
                              
                              <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                  <span class="inline">
                                    <input type="email" class="form-control" :value="this.userData?.emailAdd" placeholder="Email">
                                  </span>        
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-warning" v-on:click.prevent="updateUser()">Update User</button>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
  props: ['userData'],
  name: 'update',
  setup() {
    const payload = {
        firstName: '',
        lastName: '',
        gender: '',
        cellphoneNumber: '',
        emailAdd: '',
        userPass: ''
      }
    const store = useStore()
    const user = computed( ()=>store.state.user)
    const updateUser = async ()=> {
      store.dispatch("updateUser")
    }
    return {
      updateUser,
      payload,
      user
    }
  }
}
</script>
<style scoped>
    h1, h2{
      color: #222;
    }
</style>