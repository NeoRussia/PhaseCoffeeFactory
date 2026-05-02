#!/usr/bin/env python3
#Usage:
#Extract mod information from specific JAR files:

#python main.py --jar mod1.jar mod2.jar
#Extract from a directory:

#python main.py --dir /path/to/mods
#Specify an output directory:

#python main.py --dir /path/to/mods --output /path/to/output
#Graphical User Interface (GUI)
#To open the GUI, simply run:

#python main.py

import json
import toml
import zipfile
import os
import argparse
import tkinter as tk
from tkinter import filedialog, messagebox, ttk

def extract_mod_info_from_jar(jar_path):
    with zipfile.ZipFile(jar_path, "r") as jar:
        for file in jar.namelist():
            if file.endswith("mods.toml") or file.endswith("fabric.mod.json"):
                with jar.open(file) as mod_file:
                    content = mod_file.read().decode("utf-8")
                    if file.endswith(".toml"):
                        data = toml.loads(content)
                        mod_info = data.get("mods", [{}])[0]
                        return {
                            "mod_name": mod_info.get("displayName", "Unknown"),
                            "author": mod_info.get("authors", "Unknown")
                        }
                    elif file.endswith(".json"):
                        data = json.loads(content)
                        return {
                            "mod_name": data.get("name", "Unknown"),
                            "author": data.get("authors", "Unknown")
                        }
    return None

def export_mod_list(mod_list, output_dir):
    json_path = os.path.join(output_dir, "mod_list.json")
    md_path = os.path.join(output_dir, "mod_list.md")
    txt_path = os.path.join(output_dir, "mod_list.txt")
    
    with open(json_path, "w", encoding="utf-8") as file:
        json.dump(mod_list, file, indent=4)
    
    with open(md_path, "w", encoding="utf-8") as file:
        file.write("# Mod List\n\n")
        for mod in mod_list:
            file.write(f"- **{mod['mod_name']}** by {mod['author']}\n")
    
    with open(txt_path, "w", encoding="utf-8") as file:
        for mod in mod_list:
            file.write(f"{mod['mod_name']} - {mod['author']}\n")

def process_jars(jar_paths, output_dir):
    mod_list = []
    for jar_path in jar_paths:
        mod_data = extract_mod_info_from_jar(jar_path)
        if mod_data:
            mod_list.append(mod_data)
    export_mod_list(mod_list, output_dir)

def cli_main():
    parser = argparse.ArgumentParser(description="Extract mod information from Forge, NeoForge, and Fabric mod JARs.")
    parser.add_argument("-j", "--jar", nargs="*", help="Path to one or more JAR files.")
    parser.add_argument("-d", "--dir", help="Directory containing mod JARs.")
    parser.add_argument("-o", "--output", default="output", help="Directory to store extracted information.")
    args = parser.parse_args()
    
    os.makedirs(args.output, exist_ok=True)
    
    jar_files = args.jar if args.jar else []
    if args.dir:
        jar_files.extend([os.path.join(args.dir, f) for f in os.listdir(args.dir) if f.endswith(".jar")])
    
    if not jar_files:
        print("No JAR files found.")
        return
    
    process_jars(jar_files, args.output)
    print("Extraction complete! Mod list saved in mod_list.json, mod_list.md, and mod_list.txt")

def gui_main():
    def select_files():
        files = filedialog.askopenfilenames(filetypes=[("JAR Files", "*.jar")])
        for file in files:
            jar_list.insert(tk.END, file)
    
    def select_directory():
        directory = filedialog.askdirectory()
        if directory:
            jar_list.delete(0, tk.END)
            for file in os.listdir(directory):
                if file.endswith(".jar"):
                    jar_list.insert(tk.END, os.path.join(directory, file))
    
    def select_output_directory():
        directory = filedialog.askdirectory()
        if directory:
            output_entry.delete(0, tk.END)
            output_entry.insert(0, directory)
    
    def extract_mods():
        jar_paths = jar_list.get(0, tk.END)
        output_dir = output_entry.get()
        if not jar_paths:
            messagebox.showerror("Error", "No JAR files selected.")
            return
        os.makedirs(output_dir, exist_ok=True)
        process_jars(jar_paths, output_dir)
        messagebox.showinfo("Success", "Mod list extracted successfully!")
    
    root = tk.Tk()
    root.title("Mod List Extractor")
    root.geometry("550x400")
    root.configure(padx=10, pady=10)
    
    ttk.Label(root, text="Select JAR files or a Directory:").pack(anchor="w", pady=5)
    jar_list = tk.Listbox(root, selectmode=tk.EXTENDED, height=10)
    jar_list.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
    
    frame = ttk.Frame(root)
    frame.pack(fill=tk.X, pady=5)
    ttk.Button(frame, text="Browse JARs", command=select_files).pack(side=tk.LEFT, expand=True, padx=5)
    ttk.Button(frame, text="Browse Directory", command=select_directory).pack(side=tk.RIGHT, expand=True, padx=5)
    
    ttk.Label(root, text="Select Output Directory:").pack(anchor="w", pady=5)
    output_entry = ttk.Entry(root, width=50)
    output_entry.pack(fill=tk.X, padx=5)
    ttk.Button(root, text="Browse", command=select_output_directory).pack(pady=5)
    
    ttk.Button(root, text="Extract Mod Info", command=extract_mods).pack(pady=10)
    
    root.mainloop()

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        cli_main()
    else: 
        gui_main()
