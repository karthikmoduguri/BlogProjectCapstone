import conf from "../conf/conf.js";
import {Client,ID,Databases,Query,Storage} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    //1.createpost
    //2.updatepost
    //3.deletepost
    //4.getsinglepost
    //5.getallpost which are active
    //6.upload a file
    //7.delete a file
    //8.getfilepreview

    async createPost({title,slug,content,featuredImage,status,userId}) {
        try {
            console.log(featuredImage);
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
        } catch (error) {
            console.log("Appwrite service:createPost::error",error);
        }
    }

    async updatepost(slug,{title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service:updatepost::error",error);
        }
        
    }

    async deletepost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service:deletepost::error",error);
            return false;
        }   
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service:getpost::error",error);
            return false;
        }
        
    }

    async getPosts(queries=[Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service:getposts::error",error);
            return false;
        }
        
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service:uploadfile::error",error);
            return false;
        }
        
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service:deletefile::error",error);
            return false;
        }
        
    }

    getFilePreview(fileId) {
       return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
        
    }
    getFileView(fileId) {
  return this.bucket.getFileView(conf.appWriteBucketId, fileId);
}

}

const service=new Service();

export default service;