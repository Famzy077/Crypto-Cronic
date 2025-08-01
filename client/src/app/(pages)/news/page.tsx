import { getCryptoNews } from '@/app/lib/coingecko';
import NewsClientPage from '@/app/components/news/NewsClientPage';

// This is an async Server Component!
export default async function NewsPage() {
    // 1. Fetch data on the server
    const initialNews = await getCryptoNews();

    return (
        <main className="bg-gray-50 mt-18 max-sm:mt-14 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-7">
                <div className="text-center mb-5">
                    <h1 className="text-4xl max-sm:text-2xl md:text-5xl font-bold text-gray-800 dark:text-white">Crypto News</h1>
                    <p className="text-lg max-sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                        The latest headlines from the world of cryptocurrency.
                    </p>
                </div>

                {/* 2. Pass the fetched data to the client component */}
                <NewsClientPage initialData={initialNews} />
            </div>
        </main>
    );
}