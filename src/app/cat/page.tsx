import { Metadata } from 'next';
import Image from 'next/image';

const title = 'Sota el ginkgo'
const description = '占位符占位符占位符占位符占位符'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'ca',
        url: 'https://aki.cat',
        images: [{ url: 'https://aki.cat/website.png'}],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@ameyama_aki',
        images: ['https://aki.cat/website.png'],
      },
};

export default function CatalanPage() {
    return (
        <div className='background'>
            <div className='card'>
                <div className='avatar'>
                    <Image 
                    src="/avatar.jpg"
                    alt="Avatar"
                    width={144}
                    height={144}
                    className='rounded-full shadow-lg'
                    />
                </div>
                <div className='name-and-description'>
                    <h1>秋 雨山</h1>
                    <p className='description'>Let's go let's go down deep for it</p>
                </div>

                <div className='content'>
                    <blockquote className="blockquote-custom fade-in" style={{animationDelay: '0.6s'}}>
                        <p className='m-0'>Sota el ginkgo hi ha un nen estirat. El seu nom... era "Ameyama Aki"?</p>
                    </blockquote>
                    <p className="fade-in" style={{animationDelay: '0.8s'}}>
                        De moment, no hi ha més informació disponible sobre ella...
                    </p>
                    <p className="fade-in" style={{animationDelay: '0.8s'}}>
                        Aquest lloc web també està en construcció, us demanem que tingueu paciència...
                    </p>
                    <p className="fade-in" style={{animationDelay: '0.8s'}}>
                        Gràcies per la teva visita, et desitjo un bon dia. ♥️
                    </p>
                </div>
            </div>
        </div>
    );
  }