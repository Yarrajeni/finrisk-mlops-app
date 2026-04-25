import os

directory = r"c:\Users\Bablu\OneDrive\Desktop\antigravity\mobile-app\src\screens"
replaced_count = 0

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".js"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '$' in content:
                # We want to be careful not to replace template literals like ${var}
                # We only want to replace $ followed by a digit, or $ standalone as text
                # A simple replace is:
                # content.replace('$', '₹') BUT this breaks `${...}` string interpolation in JS!
                
                # Let's write a custom replacer
                new_content = ""
                i = 0
                while i < len(content):
                    if content[i] == '$':
                        # Check if it's template literal `${`
                        if i + 1 < len(content) and content[i+1] == '{':
                            new_content += '$'
                        else:
                            new_content += '₹'
                            replaced_count += 1
                    else:
                        new_content += content[i]
                    i += 1
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

print(f"Replaced {replaced_count} instances of $ with ₹.")
