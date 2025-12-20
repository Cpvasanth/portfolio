import OgImageGen from '../components/OgImageGen';

export const runtime = 'edge';

export default function Image() {
    return OgImageGen({
        title: 'Vasanthakumar C',
        subtitle: 'FullStackDeveloper',
        path: 'src/app/page.js',
    });
}
