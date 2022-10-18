
// Данные
import news from '../data/news.json' assert { type: "json" };
import job_categories from '../data/job_categories.json' assert { type: "json" };
import personFeedBack from '../data/person_feed_back.json' assert { type: "json" };
import posts_job from '../data/posts_job.json'  assert { type: "json" };


const isProd = process.argv.includes("--production");
const isDev = !isProd;


export default {
    isProd: isProd,
    isDev: isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    pug: {
        pretty: isDev,
        data: {
            news: news,
            job_categories: job_categories,
            person_feed_back: personFeedBack,
            posts_job: posts_job
        }
    },
    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}