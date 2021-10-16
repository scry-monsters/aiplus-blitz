import { resolver, NotFoundError } from "blitz"
// import db from "db"
import { z } from "zod"
import ytlist from "youtube-playlist"

// https://www.youtube.com/playlist?list=PLx0BC2ZFw7qiDrEJ9JqfcmSq4nH3L9WCT

const Playlist = z.object({
  // This accepts type of undefined, but is required at runtime
  url: z.string().url().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(Playlist), async ({ url }) => {
  const { data } = await ytlist(url, ["id", "name", "url", "duration"])
  return data
})
