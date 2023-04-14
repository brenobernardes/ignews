import Head from 'next/head';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>13 de Abril de 2023</time>
                        <strong>Creating posts</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, quos architecto voluptate ipsa veritatis deleniti, quis facere vero tempore expedita ducimus fugiat eos eveniet. Placeat repudiandae nisi deserunt facilis hic!</p>
                    </a>

                    <a href='#'>
                        <time>13 de Abril de 2023</time>
                        <strong>Creating posts</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor deleniti earum porro eum eaque, praesentium velit officia delectus expedita, dolore id tempora voluptas hic. Aliquid at explicabo culpa dolore.</p>
                    </a>

                    <a href='#'>
                        <time>13 de Abril de 2023</time>
                        <strong>Creating posts</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium at impedit nesciunt soluta sunt incidunt sit odit. Magni ratione deserunt laudantium beatae est amet odit non eveniet quibusdam dolorem.</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicate.at('document.type', 'publication')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100
    })

    console.log(response)

    return {
        props: {

        }
    }
}