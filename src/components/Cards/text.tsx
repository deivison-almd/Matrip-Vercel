export function TextoCard({ paragraph, principal }: any) {
  return(
    <div className="flex flex-col">
      <p className="text-[#ff7f47] text-xl font-bold mb-3">{paragraph}</p>
      <h1 className="font-bold text-[2.5rem] leading-10 text-##262339]">{principal}</h1>
    </div>
  )
}