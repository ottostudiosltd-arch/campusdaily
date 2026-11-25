import os
from PIL import Image

sheet1_path = 'public/assets/pcCampus Daily Sticker Icon Sheet-2 (1).png'
sheet2_path = 'public/assets/pcCampus Daily Sticker Icon Sheet-2 (2).png'

out_dir = 'public/assets/stickers'
os.makedirs(out_dir, exist_ok=True)

im1 = Image.open(sheet1_path)
im2 = Image.open(sheet2_path)
w1, h1 = im1.size
w2, h2 = im2.size

print(f"Sheet 1 size: {w1}x{h1}")
print(f"Sheet 2 size: {w2}x{h2}")

# Let's crop from Sheet 1 (1536x1024)
# Characters are in top row:
# Thinking Boy: x ~ 20 to 220, y ~ 100 to 340
# Scrolling Girl: x ~ 200 to 380, y ~ 100 to 340
# Cool Cat: x ~ 370 to 530, y ~ 120 to 340
# Peek-a-boo: x ~ 530 to 710, y ~ 130 to 340
# Hmmm Girl: x ~ 700 to 860, y ~ 100 to 340
# Ghost: x ~ 850 to 1030, y ~ 110 to 340

# Doodles on top right:
# Good vibes only: x ~ 1050 to 1250, y ~ 100 to 300

crops = {
    'thinking-boy.png': (15, 95, 215, 345),
    'scrolling-girl.png': (200, 95, 375, 345),
    'cool-cat.png': (365, 120, 525, 345),
    'peek-cat.png': (525, 140, 695, 345),
    'wondering-girl.png': (690, 110, 850, 345),
    'ghost-megaphone.png': (845, 115, 1025, 345),
    'good-vibes.png': (1050, 110, 1220, 320),
    'promo-card.png': (1075, 820, 1345, 950),
}

for name, box in crops.items():
    cropped = im1.crop(box)
    out_path = os.path.join(out_dir, name)
    cropped.save(out_path)
    print(f"Saved {name} with size {cropped.size}")

print("Done extracting stickers!")
