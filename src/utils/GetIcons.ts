import SimpleIcons from 'simple-icons';

export default function GetIcon(slug: string) {
  return SimpleIcons.Get(slug).svg;
}
