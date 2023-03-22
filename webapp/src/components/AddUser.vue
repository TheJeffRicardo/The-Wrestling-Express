<template>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add User
      </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: #1B1B1B;">Add User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row">
                          <h2 class="display-4" style="color: #1B1B1B;">Add User</h2>
                      </div>
                      <div class="row">
                          <div class="col">
                            <form>    
                              <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                <span class="inline">
                                  <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>   
                                  </span>
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
                                    </span>          
                                </div>
                                
                                <div class="d-flex ">
                                  <div class="form-check form-check-inline w-25 pb-3 m-auto">
                                    <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="femaleGender"
                                      value="Female" checked />
                                    <label class="form-check-label" for="femaleGender" style="color: #1B1B1B;">Female</label>
                                  </div>
                                  <div class="form-check form-check-inline w-25 pb-3 m-auto">
                                    <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="maleGender"
                                      value="Male" />
                                    <label class="form-check-label" for="maleGender" style="color: #1B1B1B;">Male</label>
                                  </div>
                                  <div class="form-check form-check-inline w-25 pb-3 m-auto">
                                    <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="otherGender"
                                      value="Other" />
                                    <label class="form-check-label" for="otherGender" style="color: #1B1B1B;">Other</label>
                                  </div>
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper w-100 pb-3 m-auto">  
                                    <span class="inline">
                                      <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass">
                                    </span>        
                                </div>
                                
                                <div class="form-control-wrapper">
                                  <label class="form-control bg-gradient" v-show="userFetch">{{userFetch}}</label>
                                </div>
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" v-on:click.prevent="signUp(payload)" class="btn btn-success">Add User</button>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';

export default {
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
    
    const signUp = (payload)=> {
      console.log(payload);
        store.dispatch("register", payload),
        store.dispatch("fetchUsers");
    }
    const userMsg = 
    computed( ()=>store.state.message )
    return {
      payload,
      userMsg,
      signUp
    }
  }
}
</script>
<style scoped>
    
</style>