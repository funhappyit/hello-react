import Post from './models/post.js';

export default async function createFakeData() {
    // 0,1 ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트#${i}`,
        body: 'dfsdfvcxvxvxvfsfsersdfsdfdsfaewrkljdfvsdklfjvlksjf' +
            'dfsdjlfkjaskfjawelkjrfkdjflksdjfkasdjfklawjevnsfvaskljle' +
            'adfjslfjkvcklxvnsejriortfjfjsklfjaskdfjlajfklwejivnvlskdfn' +
            'sdfkjasklfjoivwnerkvnsaoirujwenfkdasklfjalsjfdklsdjfdlk' +
            'dsfkeivsdkfwjeklciovskjdlfjwoifvnsklfghkewjiojvsdvnksldf' +
            'sdfskfjweoivnklsmfksdmfwsiejrfsdkfljal',
        tags: ['가짜', '데이터'],
    }));

    try {
        const docs = await Post.insertMany(posts); // insertMany는 Promise를 반환하므로 await 사용
        console.log('Inserted posts:', docs);
    } catch (err) {
        console.error('Error inserting posts:', err);
    }
}
