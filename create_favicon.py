#!/usr/bin/env python3
"""
Create favicon files from Milwin logo
Generates:
- favicon.ico (32x32)
- apple-touch-icon.png (180x180)
"""

from PIL import Image
import os

# File paths
logo_path = r"D:\Game\milwin\public\logo512.png"
favicon_path = r"D:\Game\milwin\public\favicon.ico"
apple_icon_path = r"D:\Game\milwin\public\apple-touch-icon.png"

try:
    # Open the logo image
    logo = Image.open(logo_path)
    print(f"✓ Loaded: {logo_path}")
    print(f"  Original size: {logo.size}")
    
    # Convert RGBA to RGB if necessary (for ICO format)
    if logo.mode == 'RGBA':
        # Create white background
        background = Image.new('RGB', logo.size, (255, 255, 255))
        background.paste(logo, mask=logo.split()[3])
        logo_rgb = background
    else:
        logo_rgb = logo.convert('RGB')
    
    # Create favicon.ico (32x32)
    favicon = logo_rgb.resize((32, 32), Image.Resampling.LANCZOS)
    favicon.save(favicon_path, 'ICO')
    print(f"\n✓ Created favicon.ico (32x32)")
    print(f"  Size: {os.path.getsize(favicon_path)} bytes")
    
    # Create apple-touch-icon.png (180x180)
    apple_icon = logo.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(apple_icon_path, 'PNG')
    print(f"\n✓ Created apple-touch-icon.png (180x180)")
    print(f"  Size: {os.path.getsize(apple_icon_path)} bytes")
    
    print(f"\n✅ Favicon files created successfully!")
    print(f"\nFiles ready:")
    print(f"  ✓ favicon.ico")
    print(f"  ✓ apple-touch-icon.png")
    
except FileNotFoundError:
    print(f"❌ Error: Logo file not found at {logo_path}")
except Exception as e:
    print(f"❌ Error: {e}")
