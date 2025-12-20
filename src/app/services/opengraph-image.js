import OgImageGen from '../../components/OgImageGen';

export const runtime = 'edge';

export default function Image() {
    return OgImageGen({
        title: 'Services',
        subtitle: 'Solutions',
        path: 'src/app/services/page.js',
    });
}
