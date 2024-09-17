import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file: File, folder: string) => {
    try {
        if (!file) return {
            success: false,
            data: null,
            message: "No file found"
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        //upload the file on cloudinary
        const results = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({
                folder: `JKPCL/${folder}`,
                resource_type: "auto",
            }, function (error, result) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            })
                .end(buffer);
        });

        return {
            success: true,
            data: results,
            message: "File uploaded successfully"
        };

    } catch (error) {
        return {
            success: false,
            data: null,
            message: "Error uploading to cloudinary"
        }
    }
}

export const deleteFromCloudinary = async (publicId: string[], fileType: any) => {
    try {
        if (!publicId) return null;
        const response = await cloudinary.api.delete_resources(publicId, { type: 'upload', resource_type: fileType });
        if (response.deleted)
            return true
        else return false

    } catch (error) {
        console.error("Error deleting file from Cloudinary:", error);
        return null;
    }
};
