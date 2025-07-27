//ee file lo manam em cheystunnam ante :
/*
oka class create cheysukuntunnam appwrite account cretaion,login,logout.. kosam (SO IVVANI SERVICES :VEETINI FRONTEND LO USE CHEYSUKUNTAM )
without class also manam proceed avachu (appwrite document chusi),
but class ,constructor,object la tho code oka module way lo ratsunnam ,so that object ekkada ayina use cheysukoni direct ga class loni services use cheyachu
*/

import conf from "../conf/conf.js";
import { Client,Account,ID } from "appwrite";
//console.log(import.meta.env.VITE_APPWRITE_ENDPOINT);
export class Authservice{
    client =new Client();
    account;//deeni method contructor lo enduku rasam ante first client vaste ne kada account ni create cheyyagalm
    constructor(){
        console.log(conf.appWriteUrl);
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account=new Account(this.client);
    }

    //1.account creation
    //2.login
    //3.getcurrentuser
    //4.logout

    async creataccount({email,password,name}) {
        try {
            const useraccount=await this.account.create(ID.unique(),email,password,name);
            if (useraccount) {
                //another method instead of just returning useraccount 
                return this.login({email,password});//if useraccount created we can login also
            } else {
                return useraccount;//if useraccount not created we can know why it not created
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service:getCurrentUser::error",error);
        }
        return null;
    }
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service:deletesession::error",error);
        }
    }

}

 const authService=new Authservice();
export default authService;//just using object.method we can use this class properties simply 
//no need of again and again object creation