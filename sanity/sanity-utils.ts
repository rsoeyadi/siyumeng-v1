import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Biography } from "@/types/Biography";
import { ChamberPiece } from "@/types/ChamberPiece";
import { Event } from "@/types/Event";
import { GalleryImage } from "@/types/GalleryImage";
import { Job } from "@/types/Job";
import { SoloPiece } from "@/types/SoloPiece";
import { Video } from "@/types/Video";
import { CoverPhotos } from "@/types/CoverPhotos";

export async function getBiography(): Promise<Biography> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "biography"][0] {
            _id,
            _createAt,
            "square1": square1.asset->url,
            "square2": square2.asset->url,
            biographyHalf1,
            biographyHalf2
        }`
    )
}
export async function getChamberPieces(): Promise<ChamberPiece[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "chamberPiece"]{
            _id,
            _createAt,
            title,
            composer,
        }`
    )
}

export async function getSoloPieces(): Promise<SoloPiece[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "soloPiece"]{
            _id,
            _createAt,
            title,
            composer,
        }`
    )
}

export async function getEvents(): Promise<Event[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "event"]{
            _id,
            _createAt,
            name,
            link,
            location,
            date,
            time,
            description,
        }`
    )
}

export async function getVideos(): Promise<Video[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "video"]{
            _id,
            _createAt, 
            title,      
            link,
            description,
        }`
    )
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "galleryImage"]{
            _id,
            _createAt,
            "image": image.asset->url,
        }`
    )
}

export function getCoverPhotos(): Promise<CoverPhotos> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "coverPhotos"][0]{
            _id,
            _createAt,
            "entryImage": entryImage.asset->url,
            "biographyImage": biographyImage.asset->url,
            "eventsImage": eventsImage.asset->url,
            "videosImage": videosImage.asset->url,
            "galleryImage": galleryImage.asset->url,
            "entryImage": entryImage.asset->url,
            "teachingImage": teachingImage.asset->url,
            "contactImage1": contactImage1.asset->url,
            "contactImage2": contactImage2.asset->url,
        }`
    )
}

export async function getJobs(): Promise<Job[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "job"]{
            _id,
            _createAt,
            company,
            "image": image.asset->url,
            description,
        }`
    )
}