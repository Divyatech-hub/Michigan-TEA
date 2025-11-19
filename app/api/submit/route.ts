import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const dataDir = path.join(process.cwd(), 'data')
    const file = path.join(dataDir, 'submissions.json')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
    let arr = []
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8')
      arr = JSON.parse(raw || '[]')
    }
    const entry = { ...body, submittedAt: new Date().toISOString() }
    arr.push(entry)
    fs.writeFileSync(file, JSON.stringify(arr, null, 2))
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return new NextResponse(String(err?.message || err), { status: 500 })
  }
}
