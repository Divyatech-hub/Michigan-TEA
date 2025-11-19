"use client"
import { useState } from 'react'

type FormState = {
  studentName: string
  school: string
  practitioner: string
  reflection: string
}

export default function SubmissionForm(){
  const [form, setForm] = useState<FormState>({ studentName: '', school: '', practitioner: '', reflection: '' })
  const [status, setStatus] = useState<string | null>(null)

  const minReflectionWords = 150
  const reflectionWords = form.reflection.trim() ? form.reflection.trim().split(/\s+/).length : 0

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(reflectionWords < minReflectionWords){
      setStatus(`Please meet the minimum reflection word count (${minReflectionWords}). Currently: ${reflectionWords}`)
      return
    }

    try{
      const res = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if(res.ok){
        setStatus('Thank you! Your submission was received.')
        setForm({ studentName: '', school: '', practitioner: '', reflection: '' })
      } else {
        const txt = await res.text()
        setStatus('Submission failed: ' + txt)
      }
    }catch(err){
      setStatus('Submission failed: ' + String(err))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="text-2xl font-semibold">Submit an Entry</h2>

      <label className="block mt-4">
        <div className="text-sm font-medium">Student name</div>
        <input required value={form.studentName} onChange={(e)=>setForm({...form, studentName: e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
      </label>

      <label className="block mt-4">
        <div className="text-sm font-medium">School</div>
        <input required value={form.school} onChange={(e)=>setForm({...form, school: e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
      </label>

      <label className="block mt-4">
        <div className="text-sm font-medium">Practitioner contacted (name & role)</div>
        <input required value={form.practitioner} onChange={(e)=>setForm({...form, practitioner: e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
      </label>

      <label className="block mt-4">
        <div className="text-sm font-medium">Reflection (minimum {minReflectionWords} words)</div>
        <textarea required value={form.reflection} onChange={(e)=>setForm({...form, reflection: e.target.value})} rows={8} className="mt-1 w-full border rounded px-3 py-2" />
        <div className="text-sm mt-1 text-slate-600">Word count: <span className={reflectionWords >= minReflectionWords ? 'text-green-600 font-medium' : 'text-rose-600'}>{reflectionWords}</span></div>
      </label>

      <div className="mt-6 flex items-center gap-3">
        <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">Submit</button>
        <div className="text-sm text-slate-600">We may use anonymized excerpts for publicity.</div>
      </div>

      {status && <div className="mt-4 text-sm text-slate-700">{status}</div>}
    </form>
  )
}
