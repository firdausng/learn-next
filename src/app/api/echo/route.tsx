import {NextResponse} from "next/server"
export const runtime = 'edge';
export async function GET(request: Request){
    const {searchParams} = new URL(request.url);
    const name = searchParams.get("name")
    return NextResponse.json({
        name
    })
}