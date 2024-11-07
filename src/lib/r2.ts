import "server-only";
import { GetObjectCommand, ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const S3 = new S3Client({
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    region: "auto",
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
    },
});

export const getAllContents = async () => {
    const command = new ListObjectsV2Command({
        Bucket: process.env.R2_BUCKET_NAME,
    });

    const response = await S3.send(command);

    if (response.$metadata.httpStatusCode !== 200) {
        console.error(response);
        return [];
    }

    return response.Contents;
}

export const getContent = async (Key: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_R2_STATIC_URL}/${Key}`);
    if (!response.ok) {
        console.error(response);
        return null;
    }
    const content = await response.text();

    return content;
}