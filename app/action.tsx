'use server'

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?order=popularity&page=${page}&limit=8`);
    /* https://api.jikan.moe/v4/recommendations*/
    const data =await response.json();
    
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
}