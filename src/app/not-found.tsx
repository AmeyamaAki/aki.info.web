import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex-grow">
        <div className="min-h-screen w-full transition-colors duration-500 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-xl p-8 transition-colors duration-500 flex flex-col items-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%] my-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-5">Not Found</h2>
                </div>
                <p className="leading-relaxed mb-3">Could not find requested resource</p>
                <p className="leading-relaxed mb-3"><Link href="/">Return Home</Link></p>
            </div>
        </div>
    </div>
  )
}