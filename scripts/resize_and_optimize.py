import os
from PIL import Image

# Max dimension for resizing
MAX_DIM = 700  # Change to 500 for smaller, 700 for larger

# Root directory to search for images
root_dir = os.path.join('public', 'assets')
exts = ('.jpg', '.jpeg', '.png', '.webp')

for subdir, _, files in os.walk(root_dir):
    for file in files:
        if file.lower().endswith(exts):
            file_path = os.path.join(subdir, file)
            name, ext = os.path.splitext(file)
            resized_name = f"{name}-webp.webp"
            resized_path = os.path.join(subdir, resized_name)
            try:
                with Image.open(file_path) as img:
                    img = img.convert('RGB')
                    width, height = img.size
                    # Only resize if either dimension is greater than MAX_DIM
                    if max(width, height) > MAX_DIM:
                        if width >= height:
                            new_width = MAX_DIM
                            new_height = int(height * (MAX_DIM / width))
                        else:
                            new_height = MAX_DIM
                            new_width = int(width * (MAX_DIM / height))
                        img = img.resize((new_width, new_height), Image.LANCZOS)
                        print(f"Resized {file_path} from {width}x{height} to {new_width}x{new_height}")
                    else:
                        print(f"Copied (no resize needed): {file_path}")
                    img.save(resized_path, 'webp', quality=80, method=6)
                print(f"Saved as: {resized_path}")
            except Exception as e:
                print(f"Failed to process {file_path}: {e}")
