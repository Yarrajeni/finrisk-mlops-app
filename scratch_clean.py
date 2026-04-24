import os
import re

SCREEN_DIR = r"c:\Users\Bablu\OneDrive\Desktop\antigravity\mobile-app\src\screens"
NAV_DIR = r"c:\Users\Bablu\OneDrive\Desktop\antigravity\mobile-app\src\navigation"

def get_all_screens():
    screens = []
    for root, dirs, files in os.walk(SCREEN_DIR):
        for f in files:
            if f.endswith(".js"):
                screens.append(os.path.join(root, f))
    return screens

def get_all_used_screens():
    used_screens = set()
    # Check all files in navigation for screen imports
    nav_files = []
    for root, dirs, files in os.walk(NAV_DIR):
        for f in files:
            if f.endswith(".js"):
                nav_files.append(os.path.join(root, f))
    
    # Also check App.js and TabNavigators
    app_file = r"c:\Users\Bablu\OneDrive\Desktop\antigravity\mobile-app\App.js"
    if os.path.exists(app_file): nav_files.append(app_file)

    for f in nav_files:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            # Regex to find imports from screens
            # e.g. import HomeScreen from '../screens/dashboard/HomeScreen'
            matches = re.findall(r"from\s+['\"](?:\.\./)*screens/([^'\"]+)['\"]", content)
            for match in matches:
                if not match.endswith('.js'):
                    match += '.js'
                used_screens.add(match)
    return used_screens

def main():
    screens = get_all_screens()
    used_screens = get_all_used_screens()
    
    # Also get bare filenames of used screens to be safe, because some imports might not have full paths
    used_screen_basenames = {os.path.basename(s) for s in used_screens}
    
    deleted = 0
    for screen in screens:
        basename = os.path.basename(screen)
        # Check if this screen or its exact path is used
        is_used = False
        if basename in used_screen_basenames:
            is_used = True
        
        if not is_used:
            print(f"Deleting unused screen: {screen}")
            os.remove(screen)
            deleted += 1

    print(f"Total screens deleted: {deleted}")

if __name__ == "__main__":
    main()
