import OgImageGen from '../../components/OgImageGen';

export const runtime = 'edge';

export default function Image() {
    return OgImageGen({
        title: 'My Projects',
        subtitle: 'Portfolio',
        path: 'src/app/project/page.js',
    });
}
