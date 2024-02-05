import { ImageCard, Template } from '@/components'


export default function GaleriaPage() {
    return (
        <Template>
            <section className="grid grid-cols-3 gap-8">
                <ImageCard nome='Montanha' tamanho='10MB' dataUpload='01/01/2024' src='https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=ais'/>
                <ImageCard />
                <ImageCard />
            </section>
        </Template>
    )
}