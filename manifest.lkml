project_name: "care_platr"

application: care_platr {
  label: "Care Platr"
  url: "https://localhost:8080/bundle.js"  # Update to your production URL when ready
  # file: "bundle.js"  # Uncomment if using file reference instead of URL
  entitlements: {
    core_api_methods: ["me", "folders", "folder", "all_folders", "folder_dashboards","folder_looks"]  # Only the required API methods
    use_embeds: yes
    use_form_submit: yes
    navigation: yes
    new_window: yes
    local_storage: yes
    use_clipboard: yes
    use_iframes: yes


  }
}
