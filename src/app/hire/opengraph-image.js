import OgImageGen from '../../components/OgImageGen';

export const runtime = 'edge';

export default function Image() {
    return OgImageGen({
        title: 'Hire Me',
        subtitle: 'Contact',
        path: 'src/app/hire/page.js',
    });
}
