import OgImageGen from '../../components/OgImageGen';

export const runtime = 'edge';

export default function Image() {
    return OgImageGen({
        title: 'About Me',
        subtitle: 'Experience',
        path: 'src/app/about/page.js',
    });
}
