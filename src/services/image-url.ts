import imageHolder from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string) => {
    if (!url) return imageHolder

    // Define the target string to find within the URL.
    const target = "media/";

    // Find the index of the target string and add its length to get the starting index.
    const index = url.indexOf(target) + target.length;

    // Slice the URL to extract the part before the "media/" and after it.
    // Add "/crop/600/400/" in between to create the cropped image URL.
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;