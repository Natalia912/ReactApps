import { LogoChrome, LogoFirefox, LogoOpera } from './assets'

const navigation = ['Features', 'Pricing', 'Contact']

const tabs = [
  {
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
]

const cards = [
  {
    name: 'Chrome',
    icon: LogoChrome,
    version: '62',
  },
  {
    name: 'Firefox',
    icon: LogoFirefox,
    version: '55',
  },
  {
    name: 'Opera',
    icon: LogoOpera,
    version: '46',
  },
]

const questions = [
  {
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
]

export { navigation, tabs, cards, questions }
