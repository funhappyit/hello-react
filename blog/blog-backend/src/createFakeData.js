import Post from './models/post';

export default function createFakeData(){
    const generateRandomText = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body: generateRandomText(100), // 100자의 랜덤 텍스트 생성
        tags: ['가짜', '데이터'],
    }));
    Post.insertMany(posts, (err, docs) => {
        if (err) {
            console.error(err);
        } else {
            console.log(docs);
        }
    });

}