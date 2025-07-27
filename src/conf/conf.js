const conf={
    hi:"hello",
    appWriteUrl:String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appWriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appWriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID)
}
//console.log(conf.appWriteBucketId)
export default conf