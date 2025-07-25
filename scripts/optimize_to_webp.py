import os
from PIL import Image

root_dir = os.path.join('public', 'assets', 'mcProjs')
exts = ('.jpg', '.jpeg', '.png', ".webp")

for subdir, _, files in os.walk(root_dir):
    for file in files:
        if file.lower().endswith(exts):
            file_path = os.path.join(subdir, file)
            webp_path = os.path.splitext(file_path)[0] + '.webp'
            try:
                with Image.open(file_path) as img:
                    img.save(webp_path, 'webp', quality=65, method=6)
                os.remove(file_path)
                print(f"Converted and replaced: {file_path} -> {webp_path}")
            except Exception as e:
                print(f"Failed to process {file_path}: {e}")
