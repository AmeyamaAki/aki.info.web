import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex-grow">
      <div className="background">
        <div className="card">
          <h2 className="text-3xl font-bold mb-5">Not Found</h2>
          <p className="fade-in" style={{animationDelay: '0.2s'}}>Could not find requested resource</p>
          <p className="fade-in" style={{animationDelay: '0.4s'}}><Link href="/">Return Home</Link></p>
        </div>
      </div>
    </div>
  )
}