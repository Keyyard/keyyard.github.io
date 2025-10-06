import os
from PIL import Image

# Max dimension for resizing
MAX_DIM = 700  # Change to 500 for smaller, 700 for larger

# Root directory to search for images
root_dir = os.path.join('public', 'discovery')
exts = ('.jpg', '.jpeg', '.png', '.webp')

format_map = {
    '.jpg': 'JPEG',
    '.jpeg': 'JPEG',
    '.png': 'PNG',
    '.webp': 'WEBP',
}

for subdir, _, files in os.walk(root_dir):
    for file in files:
        if not file.lower().endswith(exts):
            continue

        file_path = os.path.join(subdir, file)
        _, ext = os.path.splitext(file)
        ext = ext.lower()
        target_format = format_map.get(ext, None)

        try:
            with Image.open(file_path) as img:
                width, height = img.size
                # Only resize if either dimension is greater than MAX_DIM
                if max(width, height) > MAX_DIM:
                    if width >= height:
                        new_width = MAX_DIM
                        new_height = int(height * (MAX_DIM / width))
                    else:
                        new_height = MAX_DIM
                        new_width = int(width * (MAX_DIM / height))
                    # Convert mode if saving to JPEG
                    if target_format == 'JPEG' and img.mode != 'RGB':
                        img = img.convert('RGB')
                    img = img.resize((new_width, new_height), Image.LANCZOS)
                    img.save(file_path, format=target_format)
                    print(f"Resized {file_path} from {width}x{height} to {new_width}x{new_height}")
                else:
                    # No resize necessary; skip re-saving to avoid altering files
                    print(f"No resize needed: {file_path} ({width}x{height})")
        except Exception as e:
            print(f"Failed to process {file_path}: {e}")
