import Image from 'next/image';
import Metadata from '@/pages/components/Metadata';

const CatalanPage: React.FC = () => {
    return (
        <>
            <Metadata
                title="Sota el ginkgo"
                description="占位符占位符占位符占位符占位符"
                ogLocale="ca"
            />
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
                        <p className='description'>Let&apos;s go let&apos;s go down deep for it</p>
                    </div>

                    <div className='content'>
                        <blockquote className="blockquote-custom fade-in" style={{animationDelay: '0.2s'}}>
                            <p className='m-0'>Sota el ginkgo hi ha un nen estirat. El seu nom... era &quot;Ameyama Aki&quot;?</p>
                        </blockquote>
                        <p className="fade-in" style={{animationDelay: '0.4s'}}>
                            De moment, no hi ha més informació disponible sobre ella...
                        </p>
                        <p className="fade-in" style={{animationDelay: '0.6s'}}>
                            Aquest lloc web també està en construcció, us demanem que tingueu paciència...
                        </p>
                        <p className="fade-in" style={{animationDelay: '0.8s'}}>
                            Gràcies per la teva visita, et desitjo un bon dia. ♥️
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalanPage;