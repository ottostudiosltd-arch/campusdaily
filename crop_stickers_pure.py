import os
from PIL import Image

sheet1_path = 'public/assets/pcCampus Daily Sticker Icon Sheet-2 (1).png'
out_dir = 'public/assets/stickers'
os.makedirs(out_dir, exist_ok=True)

im1 = Image.open(sheet1_path)

# Pure character crops (without the bottom text pill)
pure_crops = {
    'thinking-boy-pure.png': (15, 95, 215, 305),
    'scrolling-girl-pure.png': (200, 95, 375, 305),
    'cool-cat-pure.png': (365, 120, 525, 295),
    'wondering-girl-pure.png': (690, 110, 850, 290),
    'peek-cat-pure.png': (525, 140, 695, 295),
    'ghost-megaphone-pure.png': (845, 115, 1025, 295),
}

for name, box in pure_crops.items():
    cropped = im1.crop(box)
    out_path = os.path.join(out_dir, name)
    cropped.save(out_path)
    print(f"Saved {name} with size {cropped.size}")

print("Pure stickers saved successfully!")
