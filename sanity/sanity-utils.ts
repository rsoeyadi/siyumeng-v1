import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Biography } from "@/types/Biography";
import { ChamberPiece } from "@/types/ChamberPiece";
import { Event } from "@/types/Event";
import { GalleryImage } from "@/types/GalleryImage";
import { Job } from "@/types/Job";
import { SoloPiece } from "@/types/SoloPiece";
import { Video } from "@/types/Video";
import { IndexPageImage } from "@/types/IndexPageImage";
import { SocialMediaLink } from "@/types/SocialMediaLink";

export async function getBiography(): Promise<Biography> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "biography"][0] {
            _id,
            _createAt,
            "image": image.asset->url,
            content
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

export async function getSocialMedia(): Promise<SocialMediaLink[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "link"]{
            _id,
            _createAt,
            link
        }`
    )
}

export async function getEvents(): Promise<Event[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "link"]{
            _id,
            _createAt,
            name,
            link,
            "image": image.asset->url,
            location,
            dates,
            time,
            description,
        }`
    )
}

export async function getVideos(): Promise<Video[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "link"]{
            _id,
            _createAt,
            link
        }`
    )
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "link"]{
            _id,
            _createAt,
            "image": image.asset->url,
        }`
    )
}

export async function getIndexPageImage(): Promise<IndexPageImage> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "indexPageImage"][0]{
            _id,
            _createAt,
            "image": image.asset->url,
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