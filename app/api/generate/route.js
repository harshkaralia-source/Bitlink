import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db('url-shortener')
    const collection = db.collection('urls')

    // Check if the short url exists
    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'URL already exists.' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({ message: 'success' })
}